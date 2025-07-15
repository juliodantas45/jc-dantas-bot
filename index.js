const venom = require('venom-bot');

console.log("🚀 Bot JC Dantas iniciado");

venom
  .create({
    session: 'jc-dantas-session',
    headless: false,
    useChrome: true,
    browserPath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  })
  .then((client) => {
    console.log("✅ Sessão criada com sucesso!");
    start(client);
  })
  .catch((error) => {
    console.error("❌ Erro ao criar sessão:", error);
  });

// Função principal que escuta e responde mensagens
function start(client) {
  console.log("🔔 Bot está ouvindo mensagens");

  client.onMessage((message) => {
    const texto = message.body.toLowerCase().trim();

    // MENU PRINCIPAL
    const menuTexto = `👋 Olá! Bem-vindo(a) à *JC Dantas Soluções Tecnológicas*.

Escolha uma opção:
1️⃣ Solicitar Orçamento de Material  
2️⃣ Serviços Disponíveis  
3️⃣ Falar com Atendente  
4️⃣ Projetos Personalizados

Digite o número da opção desejada.`;

    if (texto === 'menu' || texto === '0') {
      client.sendText(message.from, menuTexto);
      return;
    }

    if (texto === '1') {
      client.sendText(
        message.from,
        `📦 Para orçamento de material, envie:
- Seu nome completo
- Lista de materiais ou equipamentos
- Deseja apenas os materiais ou também a execução do serviço?

Responda com:
👉 "Apenas material"  
👉 "Material + execução"`
      );
      return;
    }

    if (texto === 'apenas material') {
      client.sendText(
        message.from,
        '✅ Ótimo! A *JC Dantas Soluções Tecnológicas* vai preparar um orçamento apenas com os materiais. Em breve entraremos em contato.'
      );
      return;
    }

    if (texto === 'material + execução') {
      client.sendText(
        message.from,
        '🔧 Perfeito! Incluiremos os custos de instalação no orçamento. Um atendente da *JC Dantas Soluções Tecnológicas* continuará com você em breve.'
      );
      return;
    }

    if (texto === '2') {
      client.sendText(
        message.from,
        `🛠️ Nossos serviços:
- Instalações elétricas
- Alarmes e segurança
- Interfonia
- Automação residencial
- Execução de projetos

Digite "0" para voltar ao menu.`
      );
      return;
    }

    if (texto === '3') {
      client.sendText(
        message.from,
        '📞 Um atendente da *JC Dantas Soluções Tecnológicas* responderá você em breve. Agradecemos o contato!'
      );
      return;
    }

    if (texto === '4') {
      client.sendText(
        message.from,
        '📐 Por favor, envie uma descrição da sua necessidade e, se possível, algumas fotos ou planta baixa para iniciarmos a análise do projeto personalizado.'
      );
      return;
    }

    // Se chegou aqui, mensagem desconhecida — retorna o menu
    client.sendText(message.from, menuTexto);
  });
}
