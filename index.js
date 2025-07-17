const venom = require('venom-bot');
const fs = require('fs');

venom
  .create({
    session: 'bot-jc',
    multidevice: true,
    catchQR: (base64Qr, asciiQR, attempts, urlCode) => {
      console.clear();
      console.log('\n================= QR CODE DO WHATSAPP =================');
      console.log('Escaneie com o WhatsApp no seu celular:');
      console.log('\n' + asciiQR); // QR em texto no log do Railway
      console.log('========================================================\n');

      // Salva o QR Code como imagem base64 (opcional)
      const base64Data = base64Qr.replace(/^data:image\/png;base64,/, '');
      fs.writeFileSync('qr.png', base64Data, 'base64');
      console.log('📸 QR Code também foi salvo como qr.png');
    },
  })
  .then((client) => {
    console.log('🤖 Bot JC Dantas conectado e pronto!');
    
    client.onMessage((message) => {
      if (message.body.toLowerCase() === 'oi') {
        client.sendText(message.from, 'Olá, aqui é o bot JC Dantas! Como posso te ajudar? 🤖⚡');
      } else {
        client.sendText(message.from, 'Recebido! Em breve entraremos em contato. 🔌');
      }
    });
  })
  .catch((err) => {
    console.error('Erro ao iniciar o bot:', err);
  });
