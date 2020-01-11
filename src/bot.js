const client = require("./config/client");

const botMods = require("./botMods");

client.on("message", botMods);
