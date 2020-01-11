const tmi = require("tmi.js");
const { config } = require("dotenv");
config();
const { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } = process.env;
require("./removeSpecialKey");

const optionsConfig = {
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
};

const client = new tmi.Client(optionsConfig);
client.connect();
client.on("message", onMessageHandler);
// client.on("message", onMessageViewer);

function onMessageHandler(channel, tags, message, self) {
  if (self) return; // Ignore messages from the bot
  const commands = {
    cls() {
      client.clear(channel);
    },

    mods() {
      client.mods(channel).then(data => {});
    },

    ping() {
      client.ping().then(data => {
        client.say("Ping: ", data);
      });
    }
  };

  const specialKey = "!";

  let messageLower = message.toLowerCase();
  let messagePrepared = messageLower.removeSpecialKey(specialKey);
  const commandFunction = commands[messagePrepared];

  if (commandFunction) {
    // if ("#" + tags.username == channel || tags.mod) {
    commandFunction();
    // }
  }
}
