
module.exports = async (sock, from) => {
  await sock.sendMessage(from, {
    text: `👑 SUPREME BOT

╭━━━〔 MAIN MENU 〕━━━╮
┃
┃ .menu
┃ .alive
┃ .ping
┃ .owner
┃ .sticker
┃ .help
┃
╰━━━━━━━━━━━━━━━━━━╯

⚡ Powered by SUPREME TECH`
  });
};
