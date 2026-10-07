(function () {
  'use strict';

  const data = window.QUIZ_DATA;
  const engine = window.QuizEngine;
  const ui = window.QUIZ_UI?.uiCopy;
  const books = window.QUIZ_BOOKS;
  const covers = window.QUIZ_COVERS;
  const app = document.getElementById('app');
  if (!data || !engine || !ui || !books || !covers || !app) {
    document.body.textContent = 'Não foi possível carregar o quiz. Extraia todos os arquivos do ZIP antes de abrir index.html.';
    return;
  }

  const state = {
    stage: 'intro', index: 0, answers: {}, scores: null, resolution: null,
    winner: null, bonusOptions: [], selectedBonus: null,
  };
  let timer = null;
  let shareFile = null;
  let shareFileGod = null;

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }
  function button(label, className, action) {
    const node = el('button', className, label);
    node.type = 'button';
    node.addEventListener('click', action);
    return node;
  }
  function ornament() { return el('div', 'ornament', '✦'); }
  function corners(container) {
    for (const position of ['tl', 'tr', 'bl', 'br']) {
      const corner = el('span', `frame-corner ${position}`, '✧');
      corner.setAttribute('aria-hidden', 'true');
      container.append(corner);
    }
  }
  function changeStage(stage) {
    state.stage = stage;
    render();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function reset() {
    if (timer) clearTimeout(timer);
    shareFile = null;
    shareFileGod = null;
    Object.assign(state, { stage: 'intro', index: 0, answers: {}, scores: null,
      resolution: null, winner: null, bonusOptions: [], selectedBonus: null });
    render();
  }

  function introScreen() {
    const hero = el('section', 'frame hero');
    corners(hero);
    const content = el('div', 'hero-content');
    const crest = el('img', 'hero-crest');
    crest.src = 'assets/camp-half-blood-emblem-orange.png';
    crest.alt = 'Emblema do Acampamento Meio-Sangue';
    crest.width = 188;
    crest.height = 188;
    content.append(crest);
    const title = el('h1', '', 'Qual é o seu chalé?');
    title.setAttribute('aria-label', ui.intro.title);
    content.append(title, el('div', 'hero-subtitle', 'No Acampamento Meio-Sangue?'));
    content.append(ornament(), el('p', 'hero-description', ui.intro.description));
    content.append(el('div', 'hero-spacer'));
    content.append(button(`${ui.intro.primaryAction}  →`, 'primary', () => changeStage('question')));
    content.append(el('div', 'hero-hint', ui.intro.durationHint));
    hero.append(content);
    return hero;
  }

  function progress(current) {
    const head = el('div', 'progress-head');
    head.append(el('span', 'eyebrow', 'Arquivo do campista'),
      el('span', 'progress-label', `${String(current).padStart(2, '0')} / 13`));
    const trail = el('div', 'progress-trail');
    trail.setAttribute('role', 'progressbar');
    trail.setAttribute('aria-label', 'Progresso do quiz');
    trail.setAttribute('aria-valuenow', String(current));
    trail.setAttribute('aria-valuemax', '13');
    for (let i = 1; i <= 13; i++) {
      trail.append(el('span', `trail-node ${i < current ? 'complete' : i === current ? 'current' : ''}`));
    }
    return [head, trail];
  }
  function optionButton(letter, text, selected, action) {
    const option = button('', `option${selected ? ' selected' : ''}`, action);
    option.setAttribute('aria-pressed', selected ? 'true' : 'false');
    option.append(el('span', 'option-letter', letter), el('span', '', text));
    return option;
  }
  function questionScreen() {
    const question = data.questions[state.index];
    const panel = el('section', 'parchment question-panel');
    panel.append(...progress(question.number), el('h2', '', question.question));
    const options = el('div', 'options');
    for (const option of question.options) {
      options.append(optionButton(option.id, option.text,
        state.answers[question.id] === option.id, () => {
          state.answers[question.id] = option.id;
          render();
        }));
    }
    panel.append(options);
    const actions = el('div', 'question-actions');
    if (state.index > 0) actions.append(button(`← ${ui.question.back}`, 'text-button', () => {
      state.index -= 1;
      render();
    }));
    else actions.append(el('span'));
    const next = button(`${state.index === 12 ? ui.question.finish : ui.question.next}  →`, 'primary', () => {
      if (state.index === 12) finishQuestions();
      else { state.index += 1; render(); }
    });
    next.disabled = !state.answers[question.id];
    actions.append(next);
    panel.append(actions);
    return panel;
  }
  function finishQuestions() {
    state.scores = engine.calculateScores(data, state.answers);
    state.resolution = engine.resolveWinner(state.scores);
    changeStage('calculating');
    timer = setTimeout(() => {
      timer = null;
      if (state.stage !== 'calculating') return;
      if (state.resolution.status === 'winner') {
        state.winner = state.resolution.god;
        changeStage('result');
      } else {
        state.bonusOptions = engine.shuffledTieOptions(data, state.resolution.candidates);
        state.selectedBonus = null;
        changeStage('tieBreaker');
      }
    }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1600);
  }
  function transitionScreen() {
    const screen = el('section', 'frame transition');
    corners(screen);
    const orbit = el('div', 'transition-orbit');
    orbit.setAttribute('aria-hidden', 'true');
    orbit.append(el('span', '', '✦'));
    screen.append(orbit, el('h2', '', ui.transition.line1), ornament(),
      el('p', '', ui.transition.line2));
    return screen;
  }
  function tieBreakerScreen() {
    const panel = el('section', 'parchment bonus-panel');
    panel.append(ornament(), el('h2', '', ui.tieBreaker.eyebrow),
      el('p', 'question-text', ui.tieBreaker.question));
    const options = el('div', 'options');
    state.bonusOptions.forEach((option, index) => {
      options.append(optionButton('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index], option.text,
        state.selectedBonus === option.god, () => {
          state.selectedBonus = option.god;
          render();
        }));
    });
    panel.append(options);
    const actions = el('div', 'question-actions');
    const reveal = button(`${ui.question.finish}  →`, 'primary', () => {
      state.winner = state.selectedBonus;
      changeStage('result');
    });
    reveal.disabled = !state.selectedBonus;
    actions.append(reveal);
    panel.append(actions);
    return panel;
  }
  function illustratedBanner(god, result) {
    const banner = el('aside', 'result-banner');
    banner.setAttribute('aria-label', `Arte do chalé de ${result.god}`);
    const windowNode = el('div', 'banner-window');
    const image = el('img');
    image.src = `assets/banners/${god}.webp`;
    image.alt = '';
    image.loading = 'eager';
    windowNode.append(image);
    const caption = el('div', 'banner-caption');
    caption.append(el('span', 'banner-name', result.god), el('span', 'banner-number', `CHALÉ ${result.cabin}`));
    banner.append(windowNode, caption);
    return banner;
  }
  function productLink(book) {
    const link = el('a', 'book-cta', 'Explore essa leitura');
    link.href = book.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Ver ${book.title} na Livraria Leitura (abre em nova aba)`);
    return link;
  }
  function bookCard(book, kind) {
    const card = el('article', `book-card book-card-${kind}`);
    const coverWrap = el('div', 'book-cover-wrap');
    const cover = el('img', 'book-cover');
    cover.src = covers[book.isbn];
    cover.alt = `Capa de ${book.title}, de ${book.author}`;
    cover.loading = 'eager';
    cover.decoding = 'async';
    coverWrap.append(cover);
    const content = el('div', 'book-content');
    content.append(el('div', 'eyebrow book-label', kind === 'main' ? 'Escolha do seu chalé' : 'Outra rota de leitura'), ornament(),
      el('h3', 'book-title', book.title),
      el('p', 'book-author', book.author),
      el('p', 'book-reason', book.reason));
    content.append(productLink(book));
    card.append(coverWrap, content);
    return card;
  }
  function readingSection(god) {
    const recommendation = books[god];
    const section = el('section', 'reading-section');
    section.append(el('div', 'eyebrow reading-eyebrow', 'Sua próxima missão'),
      el('h2', 'reading-title', 'Uma leitura digna do seu chalé'),
      ornament(),
      el('p', 'reading-intro', 'Uma indicação escolhida para continuar a conversa com o seu resultado.'));
    section.append(bookCard(recommendation.main, 'main'));
    if (recommendation.young) {
      const young = el('section', 'young-section');
      young.append(el('h3', 'young-heading', 'Para campistas mais jovens'),
        el('p', 'young-intro', 'Seu chalé também separou uma aventura para quem prefere começar por outra leitura.'));
      young.append(bookCard(recommendation.young, 'young'));
      section.append(young);
    }
    return section;
  }

  function quizUrl() {
    return /^https?:$/.test(window.location.protocol) ? window.location.origin + window.location.pathname : null;
  }

  function shareText(result) {
    const link = quizUrl();
    return `Meu resultado no quiz da Livraria Leitura foi ${result.god}, Chalé ${result.cabin}! Descubra o seu chalé${link ? `: ${link}` : '.'}`;
  }

  function setShareStatus(message) {
    const status = document.getElementById('share-status');
    if (status) status.textContent = message;
  }

  function cardPath(god) {
    return `assets/share-cards/${god}.jpg`;
  }

  async function prepareShareFile(god) {
    shareFile = null;
    shareFileGod = null;
    if (!quizUrl()) return;
    const shareButton = document.getElementById('share-button');
    if (shareButton) shareButton.disabled = true;
    try {
      const response = await fetch(cardPath(god));
      if (!response.ok) throw new Error('Imagem indisponível');
      const file = new File([await response.blob()], `meu-chale-${god}.jpg`, { type: 'image/jpeg' });
      if (state.stage !== 'result' || state.winner !== god) return;
      shareFile = file;
      shareFileGod = god;
      if (shareButton) shareButton.disabled = false;
    } catch (_) {
      if (shareButton) shareButton.disabled = false;
      setShareStatus('O cartão não pôde ser preparado para compartilhamento direto. O link do quiz ainda pode ser enviado.');
    }
  }

  async function shareResult(god, result) {
    try {
      if (!quizUrl()) {
        setShareStatus('Abra o quiz publicado na web para compartilhar diretamente. Você já pode baixar a imagem aqui.');
        return;
      }
      if (!navigator.share) {
        setShareStatus('Seu navegador não compartilha imagens diretamente. Use “Baixar imagem” e envie o arquivo pela rede social.');
        return;
      }
      const file = shareFileGod === god ? shareFile : null;
      if (!file || !navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: `Meu chalé: ${result.god}`, text: shareText(result), url: quizUrl() });
        setShareStatus('Link compartilhado. Se quiser publicar o cartão, use “Baixar imagem”.');
        return;
      }
      await navigator.share({ files: [file], title: `Meu chalé: ${result.god}`, text: shareText(result) });
      setShareStatus('Cartão enviado para o aplicativo escolhido.');
    } catch (error) {
      if (error.name !== 'AbortError') setShareStatus('Não foi possível compartilhar. Use “Baixar imagem” como alternativa.');
    }
  }

  function downloadCard(god) {
    if (!quizUrl()) {
      window.open(cardPath(god), '_blank', 'noopener');
      setShareStatus('A imagem abriu em outra aba. Use “Salvar imagem como” no navegador para guardá-la.');
      return;
    }
    const link = document.createElement('a');
    link.href = cardPath(god);
    link.download = `meu-chale-${god}.jpg`;
    document.body.append(link);
    link.click();
    link.remove();
    setShareStatus('Imagem salva. Agora você pode publicá-la ou enviá-la.');
  }

  async function copyQuizLink() {
    const link = quizUrl();
    if (!link) {
      setShareStatus('O link público ficará disponível quando o quiz for publicado na web.');
      return;
    }
    try {
      await navigator.clipboard.writeText(link);
      setShareStatus('Link do quiz copiado!');
    } catch (_) {
      setShareStatus('Não foi possível copiar automaticamente. Copie o endereço da página no navegador.');
    }
  }

  function shareSection(god, result) {
    const section = el('section', 'share-section');
    section.append(el('div', 'eyebrow share-eyebrow', 'Leve seu chalé com você'),
      el('h2', 'share-title', 'Compartilhe seu resultado'),
      el('p', 'share-intro', 'Seu cartão foi criado com a arte e as cores do seu chalé. Compartilhe com os amigos e convide-os a fazer o teste.'));
    const preview = el('img', 'share-preview');
    preview.id = 'share-preview';
    preview.alt = `Cartão para compartilhar o resultado ${result.god}, Chalé ${result.cabin}`;
    preview.src = cardPath(god);
    preview.width = 270;
    preview.height = 480;
    section.append(preview);
    const actions = el('div', 'share-actions');
    const shareButton = button('Compartilhar resultado', 'primary', () => shareResult(god, result));
    shareButton.id = 'share-button';
    actions.append(shareButton,
      button(quizUrl() ? 'Baixar imagem' : 'Abrir imagem para salvar', 'secondary', () => downloadCard(god)),
      button('Copiar link do quiz', 'secondary', copyQuizLink));
    section.append(actions);
    const status = el('p', 'share-status');
    status.id = 'share-status';
    status.setAttribute('role', 'status');
    section.append(status);
    return section;
  }

  function resultScreen() {
    const result = data.results[state.winner];
    const page = el('div', 'result-page');
    page.dataset.cabin = state.winner;
    const layout = el('article', 'result-layout');
    layout.dataset.cabin = state.winner;
    layout.append(illustratedBanner(state.winner, result));
    const paper = el('div', 'result-paper');
    const header = el('header', 'result-header');
    header.append(el('div', 'eyebrow result-kicker', ui.reveal.eyebrow),
      el('h1', 'result-god', result.god),
      el('div', 'result-cabin', `CHALÉ ${result.cabin}`), ornament());
    paper.append(header, el('h2', 'result-headline', result.headline));
    paper.append(el('p', 'result-parent', result.parentLine));
    const prose = el('div', 'result-prose');
    for (const paragraph of result.paragraphs) prose.append(el('p', '', paragraph));
    paper.append(prose);
    const panels = el('div', 'result-panels');
    const strength = el('section', 'trait-panel');
    strength.append(el('h3', '', ui.result.strength), el('p', '', result.strength));
    const heel = el('section', 'trait-panel');
    heel.append(el('h3', '', ui.result.achillesHeel), el('p', '', result.achillesHeel));
    panels.append(strength, heel);
    paper.append(panels);
    const secondary = engine.secondaryAffinity(data, state.scores, state.winner);
    if (secondary) {
      const block = el('section', 'secondary-affinity');
      block.append(el('h3', '', ui.result.secondaryAffinity), el('p', '', secondary.message));
      paper.append(block);
    }
    layout.append(paper);
    page.append(layout, readingSection(state.winner));
    const actions = el('div', 'result-actions result-footer-actions');
    actions.append(button(ui.result.restart, 'secondary', reset));
    page.append(actions, shareSection(state.winner, result));
    return page;
  }
  function render() {
    document.body.dataset.stage = state.stage;
    app.replaceChildren(state.stage === 'intro' ? introScreen()
      : state.stage === 'question' ? questionScreen()
      : state.stage === 'calculating' ? transitionScreen()
      : state.stage === 'tieBreaker' ? tieBreakerScreen()
      : resultScreen());
    if (state.stage === 'result') prepareShareFile(state.winner);
  }
  render();
})();
