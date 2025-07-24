const venom = require('venom-bot');

venom
  .create({
    headless: true,
    browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  .then((client) => start(client))
  .catch((error) => {
    console.error('Erro ao iniciar o bot:', error);
  });

function start(client) {
  client.onMessage(async (message) => {
    await client.sendText(message.from, 'Olá! Sou o bot JC Dantas. Como posso te ajudar?');
  });
}
