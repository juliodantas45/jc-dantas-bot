const venom = require('venom-bot');

venom
  .create(
    'sessionName', // qualquer nome, exemplo 'session'
    undefined,     // catchQr, pode deixar undefined
    (statusSession, session) => {
      console.log('Status da sessão:', statusSession);
      console.log('Sessão:', session);
    },
    {
      headless: false,
      puppeteerOptions: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process',
          '--disable-gpu',
        ],
      },
    }
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    if (message.body && !message.isGroupMsg) {
      await client.sendText(
        message.from,
        'Olá! 👋 Tudo bem?\n\nSou o assistente automático da *JC Dantas Soluções Tecnológicas*.'
      );
    }
  });
}
