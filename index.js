const { create } = require('venom-bot');

create({
  headless: true,
  browserArgs: ['--no-sandbox'],
  puppeteerOptions: {
    executablePath: '/usr/bin/chromium-browser'
  }
})
.then((client) => start(client))
.catch((error) => console.log(error));

function start(client) {
  client.onMessage(message => {
    client.sendText(message.from, 'Olá! Este é o JC Dantas Bot 🤖');
  });
}
