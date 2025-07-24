const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new', // usa novo modo headless
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    console.log('Página carregada com sucesso!');
    await browser.close();
  } catch (error) {
    console.error('Erro ao iniciar o Puppeteer:', error);
  }
})();
