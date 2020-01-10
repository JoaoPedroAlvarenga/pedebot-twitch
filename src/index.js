const tmi = require("tmi.js");
const { config } = require("dotenv");
config();
const { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } = process.env;
require("./removeSpecialKey");

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN
  },
  channels: [CHANNEL_NAME]
});
client.connect();

client.on("message", (channel, tags, message, self) => {
  function getFormattedCommands() {
    const closeKey = "]";
    const openKey = "[";
    const specialCommandsSize = 2; // /t and /help

    const commandsKeys = Object.keys(commands);
    const hideSpecialCommands = commandsKeys.slice(specialCommandsSize);
    const formattedText = hideSpecialCommands.join(` ${closeKey} ${openKey} `);
    const closeText = `${openKey} ` + formattedText + ` ${closeKey}`;
    return closeText;
  }

  if (self) {
    // Ignore echoed messages.
    return;
  }

  const commands = {
    t() {
      //for testing only
      client.say(channel, `Ok`);
    },
    help() {
      const helpCommands = getFormattedCommands();
      client.say(channel, `Todos os comandos são:  ${helpCommands}`);
    },

    hello() {
      client.say(channel, `@${tags.username}, hello! :D`);
    },
    clear() {
      if ("#" + tags.username == channel || tags.mod) {
        client.clear(channel);
      }
    },
    mods() {
      client
        .mods(channel)
        .then(data => {
          console.log(data);
          for (const mod in data) {
            client.say(channel, `${parseInt(mod) + 1}: ${data[mod]}`);
          }
        })
        .catch(err => {
          //
        });
    },
    ping() {
      client
        .ping()
        .then(data => {
          client.say(channel, `Ping: ${data}`);
        })
        .catch(err => {
          //
        });
    }
  };
  const specialKey = "!";

  let messageLower = message.toLowerCase();
  let messagePrepared = messageLower.removeSpecialKey(specialKey);
  const commandFunction = commands[messagePrepared];
  if (commandFunction) {
    commandFunction();
  }
});
