const { create } = require('venom-bot');

create({
  browserPath: '/usr/bin/chromium', // <- ESSENCIAL
  session: 'jc-dantas',
  multidevice: true
})
.then((client) => {
  // Seu código aqui...
})
.catch((erro) => {
  console.error(erro);
});
