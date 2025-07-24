const { create, Client } = require('venom-bot');

create({
  session: 'jc-dantas',
  headless: true, // Render exige headless
  useChrome: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'], // importante pro ambiente Render
})
.then((client) => startBot(client))
.catch((err) => console.error('❌ Erro ao iniciar o bot:', err));

function startBot(client) {
  console.log('🤖 Bot iniciado com sucesso!');

  client.onMessage(async (message) => {
    const menu = `🌟 *JC Dantas Soluções Tecnológicas* 🌟

Escolha uma opção abaixo:

1️⃣ Instalações Elétricas
2️⃣ Alarmes e Câmeras
3️⃣ Automação Residencial
4️⃣ Projetos e Orçamentos

Digite o número da opção ou envie *menu* para ver novamente.`;

    if (!message.isGroupMsg) {
      const msg = message.body.trim().toLowerCase();

      switch (msg) {
        case '1':
          await client.sendText(message.from, '⚡ *Instalações Elétricas*:\nRealizamos instalações residenciais e comerciais com segurança.');
          break;
        case '2':
          await client.sendText(message.from, '🔔 *Alarmes e Câmeras*:\nInstalação de sistemas de segurança modernos.');
          break;
        case '3':
          await client.sendText(message.from, '🏠 *Automação Residencial*:\nControle iluminação, som, portão e mais com soluções inteligentes.');
          break;
        case '4':
          await client.sendText(message.from, '📐 *Projetos e Orçamentos*:\nProjetos personalizados e orçamentos sem compromisso!');
          break;
        default:
          await client.sendText(message.from, `👋 Olá! Seja bem-vindo(a).\n\n${menu}`);
      }
    }
  });
}
