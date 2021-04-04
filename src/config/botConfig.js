const config = require("./consts");

const botConfig = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: config.BOTNAME,
    password: config.OAUTH_TOKEN
  },
  channels: config.CHANNELS
};


module.exports = botConfig;
