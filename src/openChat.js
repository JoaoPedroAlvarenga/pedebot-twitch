const open = require("open");

const { config } = require("dotenv");
config();

(async () => {
  await open(
    `https://www.twitch.tv/popout/${process.env.CHANNEL_NAME}/chat?popout=`,
    {
      app: ["chromium"]
    }
  );
})();
