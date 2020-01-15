require("./prototype/removeSpecialKey");
const { client } = require("./config/client");
const { commands, specialKey } = require("../config.json");

function botUsers(channel, tags, message, self) {
  if (self) return; // Ignore messages from the bot

  const messageLower = message.toLowerCase();
  const messagePrepared = messageLower.removeSpecialKey(specialKey);
  const commandFunction = commands[messagePrepared];

  commandFunction && client.say(channel, commandFunction);
}

module.exports = { botUsers };
