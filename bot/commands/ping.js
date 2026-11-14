
module.exports = async (sock, from) => {
  const start = Date.now();

  await sock.sendMessage(from, {
    text: `👑 SUPREME BOT

🏓 Pong!
⚡ Response: ${Date.now() - start}ms
✅ Status: Online`
  });
};
