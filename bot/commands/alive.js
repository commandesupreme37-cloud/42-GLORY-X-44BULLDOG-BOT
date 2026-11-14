
module.exports = async (sock, from) => {
  await sock.sendMessage(from, {
    text: `👑 SUPREME BOT

✅ Bot is online!
⚡ Status: Active
🔥 Version: 1.0
💎 Powered by SUPREME TECH`
  });
};
