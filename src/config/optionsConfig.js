const { config } = require("dotenv");
config();
const { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } = process.env;

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

module.exports = optionsConfig;
