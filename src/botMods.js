require("./prototype/removeSpecialKey");
const client = require("./config/client");
const configJson = require("../config.json");
const config = JSON.stringify(configJson);

function botMods(channel, tags, message, self) {
  if (self) return; // Ignore messages from the bot
  const commands = {
    t() {
      console.log("Passou1");

      client.say(channel, "ok");
    },

    cls() {
      client.clear(channel);
    },

    ping() {
      client.ping().then(data => {
        client.say(channel, `Ping: ${data}`);
      });
    }
  };

  const specialKey = config.specialKey;

  let messageLower = message.toLowerCase();
  let messagePrepared = messageLower.removeSpecialKey(specialKey);
  const commandFunction = commands[messagePrepared];

  if (commandFunction) {
    console.log(messagePrepared);

    commandFunction();
  }
}

module.exports = botMods;
