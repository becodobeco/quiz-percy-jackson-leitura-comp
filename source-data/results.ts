export type GodId =
  | "zeus"
  | "poseidon"
  | "demeter"
  | "ares"
  | "athena"
  | "apollo"
  | "hephaestus"
  | "aphrodite"
  | "hermes"
  | "dionysus"
  | "hades"
  | "iris"
  | "hypnos"
  | "nemesis"
  | "nike"
  | "hebe"
  | "tyche"
  | "hecate";

export interface QuizResult {
  id: GodId;
  god: string;
  cabin: number;
  headline: string;
  parentLine: string;
  paragraphs: readonly string[];
  strength: string;
  achillesHeel: string;
}

export const results: Record<GodId, QuizResult> = {
  zeus: {
    id: "zeus",
    god: "Zeus",
    cabin: 1,
    headline: "O Chalé 1 acaba de fazer uma reivindicação",
    parentLine: "Seu progenitor divino seria Zeus.",
    paragraphs: [
      "Você tende a perceber rapidamente quando uma situação precisa de direção — e, muitas vezes, acaba assumindo essa responsabilidade antes mesmo de decidir se queria. Existe em você uma relação forte com autonomia, liderança e a necessidade de fazer as coisas avançarem. Quando todos parecem esperando alguém tomar uma decisão, é bem possível que esse alguém seja você.",
      "Mas isso não significa que você queira mandar em todo mundo. O que pesa mais é a sensação de que certas responsabilidades simplesmente não podem ficar sem dono. Você pode ter facilidade para enxergar o quadro geral, estabelecer prioridades e sustentar decisões difíceis quando outras pessoas hesitam.",
    ],
    strength:
      "presença, liderança e capacidade de agir quando alguém precisa assumir o comando.",
    achillesHeel:
      "carregar responsabilidades demais, ter dificuldade de dividir o controle e, às vezes, confundir firmeza com a necessidade de estar certo.",
  },

  poseidon: {
    id: "poseidon",
    god: "Poseidon",
    cabin: 3,
    headline: "Parece que o mar reconheceu um dos seus",
    parentLine: "Seu progenitor divino seria Poseidon.",
    paragraphs: [
      "Existe algo muito intuitivo na maneira como você atravessa o mundo. Você pode fazer planos, claro, mas sabe que nem tudo permanece exatamente como imaginamos — e costuma confiar na própria capacidade de se adaptar quando as circunstâncias mudam.",
      "Isso não quer dizer que você seja imprevisível o tempo todo ou que precise morar na praia para justificar o resultado. O ponto aqui é outro: você tende a funcionar bem quando precisa sentir a situação, reagir ao que está acontecendo e encontrar seu equilíbrio em movimento.",
      "Suas emoções também podem ser profundas. Nem sempre aparecem na superfície, mas isso não significa que sejam pequenas. Quando alguma coisa ou alguém realmente importa, você dificilmente fica pela metade.",
    ],
    strength:
      "adaptabilidade, lealdade e capacidade de reagir sob pressão.",
    achillesHeel:
      "teimosia, oscilações intensas e uma resistência considerável quando sente que alguém está tentando controlar seus passos.",
  },

  demeter: {
    id: "demeter",
    god: "Deméter",
    cabin: 4,
    headline: "O Chalé 4 tem lugar para você",
    parentLine: "Seu progenitor divino seria Deméter.",
    paragraphs: [
      "Você possui uma relação forte com cuidado, continuidade e tudo aquilo que precisa de atenção para crescer. Isso pode aparecer nas relações, nos projetos, no trabalho ou simplesmente na maneira como percebe quando alguma coisa importante está sendo negligenciada.",
      "E não: o resultado não significa automaticamente que você tenha uma horta impecável ou saiba manter uma planta viva por mais de quinze dias.",
      "Seu perfil fala muito mais sobre nutrir, sustentar e proteger. Você tende a entender que boas coisas raramente surgem prontas: elas precisam de tempo, constância e alguém disposto a continuar cuidando quando o entusiasmo inicial passa.",
      "Só não confunda gentileza com passividade. Quando algo que você considera importante está ameaçado, sua capacidade de resistência pode surpreender bastante gente.",
    ],
    strength:
      "constância, cuidado e capacidade de criar condições para que pessoas e projetos floresçam.",
    achillesHeel:
      "assumir responsabilidades demais, proteger além da conta ou ter dificuldade de aceitar que nem tudo pode ser salvo por dedicação.",
  },

  ares: {
    id: "ares",
    god: "Ares",
    cabin: 5,
    headline: "Alguém no Chalé 5 já está preparando espaço",
    parentLine: "Seu progenitor divino seria Ares.",
    paragraphs: [
      "Você não precisa amar brigas para ter afinidade com o deus da guerra. O que aparece no seu perfil é uma disposição maior para encarar aquilo que muita gente preferiria evitar.",
      "Quando surge um conflito, uma injustiça ou uma situação que exige coragem, seu primeiro impulso costuma estar mais próximo de agir do que de fingir que nada aconteceu. Você valoriza franqueza e provavelmente tem pouca paciência para jogos excessivamente indiretos quando o problema poderia simplesmente ser colocado na mesa.",
      "Por outro lado, sua intensidade pode fazer com que certas batalhas pareçam mais urgentes do que realmente são.",
    ],
    strength:
      "coragem, iniciativa e disposição para defender o que considera importante.",
    achillesHeel:
      "agir antes de compreender tudo, escalar conflitos desnecessariamente ou interpretar recuo como fraqueza quando, às vezes, ele é estratégia.",
  },

  athena: {
    id: "athena",
    god: "Atena",
    cabin: 6,
    headline: "O Chalé 6 já separou uma cama para você",
    parentLine: "Seu progenitor divino seria Atena.",
    paragraphs: [
      "Antes de agir, você quer entender. Antes de aceitar uma resposta, quer saber como ela funciona. E, quando alguma coisa dá errado, existe uma boa chance de sua cabeça voltar alguns passos tentando descobrir onde exatamente a lógica se perdeu.",
      "Sua afinidade com Atena não significa apenas “ser inteligente” — até porque inteligência não pertence a um único chalé. O que realmente aparece é uma tendência a organizar informações, reconhecer padrões, antecipar consequências e transformar situações confusas em algo que possa ser analisado.",
      "Planos dão segurança. Compreender as regras do jogo também.",
      "O problema é que o mundo nem sempre respeita o plano.",
    ],
    strength:
      "estratégia, pensamento crítico e capacidade de encontrar estrutura no caos.",
    achillesHeel:
      "overthinking, dificuldade de abandonar uma ideia depois de investir nela e a perigosa tentação de acreditar que, se todos tivessem entendido seu plano direito, nada teria dado errado.",
  },

  apollo: {
    id: "apollo",
    god: "Apolo",
    cabin: 7,
    headline: "O Chalé 7 parece ter encontrado mais um talento",
    parentLine: "Seu progenitor divino seria Apolo.",
    paragraphs: [
      "Você tende a ter uma relação especial com expressão e domínio: existe prazer em descobrir aquilo que faz bem, desenvolver essa capacidade e conseguir transformar algo interno em alguma coisa que também alcance outras pessoas.",
      "Isso pode aparecer na arte, na comunicação, no conhecimento, no cuidado ou em qualquer área em que habilidade e expressão caminhem juntas. Portanto, não é preciso tocar lira, escrever poesia ou acertar uma flecha no centro do alvo.",
      "Há também em você uma vontade de iluminar alguma coisa — uma ideia, um ambiente, uma pessoa, uma conversa.",
      "Naturalmente, essa relação com competência pode trazer cobranças bem altas.",
    ],
    strength:
      "expressão, talento e capacidade de inspirar ou orientar outras pessoas.",
    achillesHeel:
      "perfeccionismo, sensibilidade ao reconhecimento e a sensação incômoda de que ser bom em alguma coisa significa que você precisa ser excelente o tempo inteiro.",
  },

  hephaestus: {
    id: "hephaestus",
    god: "Hefesto",
    cabin: 9,
    headline: "Alguém já deve estar construindo sua cama no Chalé 9",
    parentLine: "Seu progenitor divino seria Hefesto.",
    paragraphs: [
      "Você olha para problemas e tende a pensar em como resolvê-los. Nem sempre precisa existir uma grande teoria por trás: muitas vezes, a melhor maneira de entender alguma coisa é abrir, testar, ajustar e descobrir por que diabos ela não está funcionando.",
      "Seu perfil fala de engenhosidade, persistência e construção. Pode envolver tecnologia ou trabalho manual, mas também aparece quando você transforma ideias abstratas em algo concreto, melhora sistemas ou demonstra carinho fazendo aquilo que precisa ser feito.",
      "Você provavelmente valoriza competência muito mais do que aparência.",
      "E, quando fica obcecado por um projeto, bom... talvez seja melhor alguém lembrar que refeições e sono continuam existindo.",
    ],
    strength:
      "criatividade prática, persistência e capacidade de transformar problemas em soluções.",
    achillesHeel:
      "isolamento, obsessão pelo trabalho e dificuldade de abandonar algo enquanto ainda acredita que existe uma maneira de consertar.",
  },

  aphrodite: {
    id: "aphrodite",
    god: "Afrodite",
    cabin: 10,
    headline:
      "Afrodite fez sua reivindicação — e não é pelo motivo que você está pensando",
    parentLine: "Seu progenitor divino seria Afrodite.",
    paragraphs: [
      "Você tende a perceber que relações humanas raramente são simples. Tons de voz, desejos, inseguranças, vínculos, aquilo que alguém diz e aquilo que realmente quer dizer: todas essas camadas parecem importar para você.",
      "Esse resultado não tem nada a ver com ser superficial, apaixonado por romance ou passar horas diante do espelho. A esfera de Afrodite é muito maior. Amor, desejo e conexão movem pessoas, alteram decisões e às vezes são forças muito mais poderosas do que argumentos perfeitamente racionais.",
      "Você provavelmente compreende, mesmo intuitivamente, que sentimentos não são detalhes periféricos de uma situação.",
    ],
    strength:
      "inteligência emocional, conexão e capacidade de perceber o que move as pessoas.",
    achillesHeel:
      "envolver-se demais nas emoções alheias, buscar validação onde não deveria ou usar sua leitura das pessoas para conduzir situações mais do que gostaria de admitir.",
  },

  hermes: {
    id: "hermes",
    god: "Hermes",
    cabin: 11,
    headline: "Bem-vindo ao Chalé 11 — esperamos que suas coisas continuem onde você deixou",
    parentLine: "Seu progenitor divino seria Hermes.",
    paragraphs: [
      "Você parece ter uma habilidade muito útil: entender rapidamente como se mover dentro de uma situação.",
      "Quando aparece um obstáculo, talvez seu primeiro pensamento não seja destruí-lo nem esperar alguém resolver. Você procura uma brecha, uma pessoa certa para conversar, uma rota alternativa ou um jeito de transformar o problema em oportunidade.",
      "Hermes não é apenas o deus das pegadinhas e dos ladrões. Comunicação, viagens, negociação, comércio e travessia de fronteiras também pertencem à sua esfera — e isso combina com pessoas adaptáveis, curiosas e capazes de circular entre ambientes muito diferentes.",
      "As regras? Bem. Elas existem. Mas você provavelmente gosta de saber exatamente até onde vão.",
    ],
    strength:
      "versatilidade, comunicação e capacidade de encontrar caminhos onde outras pessoas enxergam paredes.",
    achillesHeel:
      "inquietação, dificuldade de permanecer em uma única direção e uma relação criativa demais com limites quando eles parecem inconvenientes.",
  },

  dionysus: {
    id: "dionysus",
    god: "Dionísio",
    cabin: 12,
    headline: "O Chalé 12 reivindicou você. Sim, sério.",
    parentLine: "Seu progenitor divino seria Dionísio.",
    paragraphs: [
      "Talvez este resultado tenha te pegado de surpresa — principalmente se sua primeira associação com Dionísio envolve apenas festas e vinho. Mas o coração desse perfil está em outro lugar.",
      "Você tende a valorizar experiência, liberdade e movimento emocional. Existe em você uma disposição para sair do roteiro, experimentar possibilidades e perceber quando uma situação precisa ser quebrada antes que alguma coisa nova possa surgir.",
      "Você também pode ter facilidade para mudar o clima de um ambiente, deslocar perspectivas ou transformar momentos comuns em histórias que serão lembradas depois.",
      "Dionísio também está ligado ao teatro, à catarse e ao rompimento de fronteiras. Portanto, existe aqui uma relação especial com aquilo que nos permite ser menos contidos — e talvez um pouco mais verdadeiros.",
    ],
    strength:
      "espontaneidade, liberdade e capacidade de provocar movimento quando tudo parece rígido demais.",
    achillesHeel:
      "excessos, impulsividade, escapismo e a tendência de abandonar estruturas antes de descobrir se alguma delas ainda poderia funcionar.",
  },

  hades: {
    id: "hades",
    god: "Hades",
    cabin: 13,
    headline: "As portas do Chalé 13 estão abertas para você",
    parentLine: "Seu progenitor divino seria Hades.",
    paragraphs: [
      "Você provavelmente não entrega tudo sobre si logo de cara. Algumas coisas precisam de confiança, tempo e profundidade antes de atravessarem suas fronteiras pessoais.",
      "Isso não significa que você seja sombrio, antissocial ou esteja destinado a passar os dias dramaticamente encarando uma parede preta. Seu perfil fala principalmente de privacidade, resistência e vínculos profundos.",
      "Você tende a lidar relativamente bem com assuntos que outras pessoas preferem evitar e pode ter uma memória emocional bastante forte. Quando alguém realmente atravessa suas defesas, sua lealdade dificilmente é superficial.",
      "O problema é que guardar tudo também pesa.",
    ],
    strength:
      "profundidade, independência e lealdade resistente ao tempo.",
    achillesHeel:
      "isolamento, dificuldade de pedir ajuda, rancores duradouros e a perigosa convicção de que você consegue carregar certas coisas sozinho.",
  },

  iris: {
    id: "iris",
    god: "Íris",
    cabin: 14,
    headline: "Parece que uma mensagem acabou de chegar para o Chalé 14",
    parentLine: "Seu progenitor divino seria Íris.",
    paragraphs: [
      "Você tem uma tendência natural a criar pontes. Quando duas pessoas não estão se entendendo, talvez consiga perceber onde a mensagem se perdeu. Quando existem diferentes perspectivas sobre uma situação, seu instinto costuma ser aproximá-las antes de simplesmente escolher um lado.",
      "Isso não significa evitar conflitos a qualquer custo. Seu talento está mais próximo de conectar, traduzir e transmitir.",
      "Comunicação não é apenas falar bem. É saber adaptar uma mensagem, perceber como ela será recebida e entender que pessoas diferentes podem precisar de caminhos diferentes para chegar ao mesmo ponto.",
      "Talvez por isso conversas aparentemente banais tenham uma tendência suspeita a ficar muito mais profundas perto de você.",
    ],
    strength:
      "comunicação, mediação e capacidade de aproximar pessoas e perspectivas.",
    achillesHeel:
      "adaptar-se demais aos outros, assumir problemas de comunicação que não são seus ou tentar manter pontes que algumas pessoas simplesmente não querem atravessar.",
  },

  hypnos: {
    id: "hypnos",
    god: "Hipnos",
    cabin: 15,
    headline: "O Chalé 15 reivindicou você — e não, não é só porque você está com sono",
    parentLine: "Seu progenitor divino seria Hipnos.",
    paragraphs: [
      "Você parece compreender uma coisa que o mundo frequentemente esquece: nem toda resposta aparece quando continuamos forçando.",
      "Seu perfil tem uma relação forte com mundo interior, pausa, imaginação e processamento silencioso. Às vezes, você precisa se afastar um pouco de uma situação para conseguir enxergá-la melhor. Outras vezes, uma conexão simplesmente surge quando sua cabeça finalmente tem espaço para vagar.",
      "Isso não significa preguiça ou falta de iniciativa. Descanso, sonho e reflexão também podem ser formas de reorganização.",
      "Seu desafio começa quando o espaço interior fica tão confortável que retornar ao mundo concreto parece trabalhoso demais.",
    ],
    strength:
      "introspecção, imaginação e capacidade de respeitar ritmos que outras pessoas tentariam apressar.",
    achillesHeel:
      "procrastinação, escapismo e tendência a permanecer pensando quando já chegou a hora de agir.",
  },

  nemesis: {
    id: "nemesis",
    god: "Nêmesis",
    cabin: 16,
    headline: "A balança parece ter decidido: Chalé 16",
    parentLine: "Seu progenitor divino seria Nêmesis.",
    paragraphs: [
      "Você presta atenção em desequilíbrios.",
      "Talvez consiga tolerar uma derrota justa melhor do que uma vitória conquistada de maneira errada. Talvez certas situações incomodem não porque atingiram você diretamente, mas porque alguém recebeu muito mais — ou muito menos — do que deveria.",
      "Seu perfil está ligado a consequência, equilíbrio e responsabilização. Você dificilmente acredita que tudo deva simplesmente ser esquecido em nome da paz.",
      "Mas existe uma diferença delicada entre buscar equilíbrio e começar a manter um placar emocional de cada erro cometido ao seu redor.",
    ],
    strength:
      "senso de justiça, percepção de desequilíbrios e coragem para lembrar que escolhas têm consequências.",
    achillesHeel:
      "dificuldade de deixar certas coisas para trás e a possibilidade de transformar justiça em punição quando a ferida se torna pessoal.",
  },

  nike: {
    id: "nike",
    god: "Nike",
    cabin: 17,
    headline: "O Chalé 17 acaba de marcar mais uma vitória",
    parentLine: "Seu progenitor divino seria Nike.",
    paragraphs: [
      "Você não precisa competir com todo mundo o tempo inteiro — embora talvez algumas pessoas ao seu redor discordem dessa afirmação.",
      "O que aparece no seu perfil é uma relação forte com desafio, desempenho e superação. Metas têm uma capacidade peculiar de ativar alguma coisa em você. Quando existe um resultado claro a alcançar, sua energia tende a aumentar.",
      "Isso não significa que você só se importe em “ganhar”. Muitas vezes, a verdadeira competição acontece consigo mesmo: fazer melhor, ir mais longe, descobrir do que é capaz.",
      "Só existe um pequeno problema quando cada atividade começa a parecer uma oportunidade de medir desempenho.",
    ],
    strength:
      "determinação, disciplina e disposição para perseguir objetivos difíceis.",
    achillesHeel:
      "transformar tudo em comparação, ter dificuldade de aceitar resultados imperfeitos e esquecer que nem toda experiência precisa produzir um vencedor.",
  },

  hebe: {
    id: "hebe",
    god: "Hebe",
    cabin: 18,
    headline: "Parece que o Chalé 18 acaba de ganhar companhia",
    parentLine: "Seu progenitor divino seria Hebe.",
    paragraphs: [
      "Você tende a perceber rapidamente quando um ambiente poderia ser mais acolhedor — e, muitas vezes, faz alguma coisa a respeito.",
      "Seu perfil está ligado a vitalidade, hospitalidade, cuidado e convivência. Você pode ser aquela pessoa que nota quem ficou de fora, tenta deixar os outros confortáveis ou transforma uma reunião qualquer em algo que parece um pouco mais leve.",
      "Isso não significa viver eternamente em estado de alegria artificial. Hebe representa juventude e renovação, mas isso também pode aparecer como a capacidade de lembrar às pessoas que a vida não precisa ser apenas responsabilidade, produtividade e problema.",
    ],
    strength:
      "acolhimento, leveza e capacidade de criar ambientes onde as pessoas se sentem incluídas.",
    achillesHeel:
      "assumir o bem-estar de todo mundo, minimizar problemas difíceis ou esquecer que você não precisa manter o clima agradável o tempo inteiro.",
  },

  tyche: {
    id: "tyche",
    god: "Tique",
    cabin: 19,
    headline: "A sorte rolou os dados e o Chalé 19 ficou com você",
    parentLine: "Seu progenitor divino seria Tique.",
    paragraphs: [
      "Você parece ter uma relação bastante interessante com o imprevisível.",
      "Onde algumas pessoas veem falta de controle, você pode enxergar possibilidade. Nem sempre precisa saber exatamente como tudo terminará antes de começar — às vezes basta uma oportunidade interessante e a confiança de que você descobrirá o resto no caminho.",
      "Isso não significa que sua vida inteira dependa de sorte. Seu perfil está mais ligado à abertura para o acaso, à disposição de arriscar e à habilidade de reconhecer oportunidades que não estavam no plano original.",
      "Naturalmente, existe uma diferença entre aceitar o imprevisível e entregar todas as decisões ao universo.",
    ],
    strength:
      "flexibilidade, coragem diante da incerteza e capacidade de aproveitar oportunidades inesperadas.",
    achillesHeel:
      "impulsividade, inconsistência e a tendência de confiar que as coisas vão se resolver sem perguntar quem exatamente ficará responsável por fazê-las se resolver.",
  },

  hecate: {
    id: "hecate",
    god: "Hécate",
    cabin: 20,
    headline: "O Chalé 20 parece saber alguma coisa que você ainda não sabe",
    parentLine: "Seu progenitor divino seria Hécate.",
    paragraphs: [
      "Você se sente atraído por aquilo que ainda não compreende completamente.",
      "Sistemas complexos, significados escondidos, perguntas sem respostas simples e caminhos que outras pessoas preferem não explorar têm uma tendência suspeita a chamar sua atenção. Quando encontra uma porta fechada, parte de você provavelmente quer descobrir o que existe atrás dela — e outra parte já está procurando a chave.",
      "Seu perfil está ligado a conhecimento, transformação e domínio do complexo. Não basta saber que alguma coisa funciona; existe vontade de compreender camadas, possibilidades e mecanismos menos evidentes.",
      "Só que algumas portas estão fechadas por bons motivos.",
      "Provavelmente.",
    ],
    strength:
      "curiosidade profunda, tolerância à complexidade e disposição para aprender aquilo que exige tempo e dedicação.",
    achillesHeel:
      "obsessão, secretismo e a tendência de continuar investigando muito depois de alguém sensato ter sugerido deixar aquilo quieto.",
  },
};

export type SecondaryAffinityDifference = 0 | 1 | 2 | 3;

export function getSecondaryAffinityMessage(
  secondGodName: string,
  difference: number,
): string | null {
  if (difference <= 1) {
    return `Por muito pouco, ${secondGodName} não pediu uma revisão na sua árvore genealógica.`;
  }

  if (difference === 2) {
    return `Aliás, ${secondGodName} também parece ter uma reivindicação bastante convincente sobre você.`;
  }

  if (difference === 3) {
    return `Você também demonstra uma afinidade considerável com o Chalé de ${secondGodName}.`;
  }

  return null;
}
