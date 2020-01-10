const { config } = require("dotenv");
const tmi = require("tmi.js");
config();
const { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } = process.env;

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

// Initial Settings

String.prototype.removeSpecialKey = function(specialKey) {
  if (this.slice(0, 1) === specialKey) {
    return this.slice(1, this.length);
  }
};

client.on("message", (channel, tags, message, self) => {
  if (self) {
    // Ignore echoed messages.
    return;
  }

  const commands = {
    hello() {
      client.say(channel, `@${tags.username}, heya! `);
    },
    clear() {
      if (tags.username == CHANNEL_NAME || tags.mod) client.clear(CHANNEL_NAME);
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
