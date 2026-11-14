
const menu = require("./commands/menu");
const alive = require("./commands/alive");
const ping = require("./commands/ping");
const owner = require("./commands/owner");

async function handleMessage(sock, from, text) {
  const command = text.trim().split(/\s+/)[0].toLowerCase();

  switch (command) {
    case ".menu":
      return menu(sock, from);

    case ".alive":
      return alive(sock, from);

    case ".ping":
      return ping(sock, from);

    case ".owner":
      return owner(sock, from);

    default:
      return;
  }
}

module.exports = handleMessage;
