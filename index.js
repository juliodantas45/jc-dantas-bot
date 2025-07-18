const venom = require('venom-bot');

venom
  .create({
    session: 'bot-jc',
    headless: false, // <- ESSENCIAL para rodar no Render
    puppeteerOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
      ],
    },
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.error('Erro ao iniciar o bot:', erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Olá! Eu sou o bot JC Dantas. Em que posso ajudar?')
        .then(() => {
          console.log('Mensagem enviada');
        })
        .catch((error) => {
          console.error('Erro ao enviar mensagem:', error);
        });
    }
  });
}
