require("dotenv").config();
const { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } = process.env;

module.exports = {
  BOTNAME: BOT_USERNAME,
  OAUTH_TOKEN,
  CHANNELS: [CHANNEL_NAME]
}
