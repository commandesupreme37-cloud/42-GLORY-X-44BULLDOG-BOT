
module.exports = async (sock, from) => {
  await sock.sendMessage(from, {
    text: `👑 SUPREME BOT

Owner: SUPREME TECH
Bot: SUPREME BOT
Version: 1.0.0

⚡ Powered by SUPREME TECH`
  });
};
