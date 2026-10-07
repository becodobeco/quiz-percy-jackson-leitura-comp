(function () {
  'use strict';

  const WIDTH = 1080;
  const HEIGHT = 1920;

  function loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Não foi possível carregar ${source}`));
      image.src = source;
    });
  }

  function cover(ctx, image, x, y, width, height) {
    const scale = Math.max(width / image.width, height / image.height);
    const sourceWidth = width / scale;
    const sourceHeight = height / scale;
    ctx.drawImage(image, (image.width - sourceWidth) / 2, (image.height - sourceHeight) / 2,
      sourceWidth, sourceHeight, x, y, width, height);
  }

  // Two source banners include a white presentation canvas around the artwork.
  // These bounds isolate the actual illustration before any proportional crop.
  const artworkBounds = {
    hebe: [203, 0, 536, 1672],
    tyche: [239, 0, 546, 1536],
  };

  function coverArtwork(ctx, image, god, x, y, width, height) {
    const [left, top, artWidth, artHeight] = artworkBounds[god] || [0, 0, image.width, image.height];
    const targetRatio = width / height;
    let sourceWidth = artWidth;
    let sourceHeight = artHeight;
    if (sourceWidth / sourceHeight > targetRatio) sourceWidth = sourceHeight * targetRatio;
    else sourceHeight = sourceWidth / targetRatio;
    const sourceX = left + (artWidth - sourceWidth) / 2;
    const sourceY = top + (artHeight - sourceHeight) / 2;
    ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
  }

  async function create(god, result, colors) {
    await Promise.all([
      document.fonts.load('72px Marcellus'),
      document.fonts.load('600 30px "Source Serif 4"'),
      document.fonts.load('700 24px "Source Sans 3"'),
    ]);
    const [night, banner, logo] = await Promise.all([
      loadImage('assets/camp-night.png'),
      loadImage(`assets/banners/${god}.webp`),
      loadImage('assets/logo-leitura-branco.png'),
    ]);
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('O navegador não conseguiu criar o cartão.');

    cover(ctx, night, 0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#071b2fd1';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 5;
    ctx.strokeRect(36, 36, WIDTH - 72, HEIGHT - 72);
    ctx.lineWidth = 2;
    ctx.strokeRect(53, 53, WIDTH - 106, HEIGHT - 106);

    ctx.textAlign = 'center';
    ctx.fillStyle = colors.accent;
    ctx.font = '700 27px "Source Sans 3", sans-serif';
    ctx.fillText('REIVINDICAÇÃO IDENTIFICADA', WIDTH / 2, 132);

    // The artwork fills a consistent frame without stretching any banner.
    const artX = 204;
    const artY = 178;
    const artWidth = 672;
    const artHeight = 1320;
    ctx.save();
    roundRect(ctx, artX, artY, artWidth, artHeight, 3);
    ctx.clip();
    coverArtwork(ctx, banner, god, artX, artY, artWidth, artHeight);
    ctx.restore();
    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(artX - 8, artY - 8, artWidth + 16, artHeight + 16);

    const shade = ctx.createLinearGradient(0, 1330, 0, 1715);
    shade.addColorStop(0, '#071b2f00');
    shade.addColorStop(0.35, '#071b2fe8');
    shade.addColorStop(1, '#071b2fff');
    ctx.fillStyle = shade;
    ctx.fillRect(95, 1320, 890, 400);

    ctx.fillStyle = '#fff8e9';
    ctx.font = '94px Marcellus, Georgia, serif';
    ctx.fillText(result.god.toUpperCase(), WIDTH / 2, 1560, 900);
    ctx.fillStyle = colors.accent;
    ctx.font = '700 34px "Source Sans 3", sans-serif';
    ctx.fillText(`CHALÉ ${result.cabin}`, WIDTH / 2, 1624);

    ctx.fillStyle = '#fff8e9';
    ctx.font = '600 37px "Source Serif 4", Georgia, serif';
    ctx.fillText('Qual é o seu chalé?', WIDTH / 2, 1734);
    ctx.fillStyle = '#e4c89a';
    ctx.font = '700 24px "Source Sans 3", sans-serif';
    ctx.fillText('FAÇA O TESTE • LIVRARIA LEITURA', WIDTH / 2, 1785);

    const logoWidth = 214;
    const logoHeight = logoWidth * logo.height / logo.width;
    ctx.globalAlpha = 0.78;
    ctx.drawImage(logo, (WIDTH - logoWidth) / 2, 1810, logoWidth, logoHeight);
    ctx.globalAlpha = 1;

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Não foi possível salvar o cartão.')), 'image/jpeg', 0.9);
    });
  }

  window.QuizShareCard = { create, width: WIDTH, height: HEIGHT };
})();
