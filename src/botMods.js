require("./prototype/removeSpecialKey");
const { client } = require("./config/client");
const { specialKey } = require("../config.json");
const { CHANNEL_NAME } = process.env;

function botMods(channel, tags, message, self) {
  const { username, mod } = tags;
  if (self) return; // Ignore messages from the bot

  const commands = {
    cls() {
      client.clear(channel);
    },

    ping() {
      client.ping().then(data => {
        client.say(channel, `Ping: ${data}`);
      });
    }
  };

  const messageLower = message.toLowerCase();
  const messagePrepared = messageLower.removeSpecialKey(specialKey);
  const commandFunction = commands[messagePrepared];

  if (username === CHANNEL_NAME || mod) commandFunction && commandFunction();
}

module.exports = { botMods };
