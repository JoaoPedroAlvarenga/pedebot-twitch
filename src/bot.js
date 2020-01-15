const { client } = require("./config/client");
const { botMods } = require("./botMods");
const { botUsers } = require("./botUsers");

client.on("message", botMods);
client.on("message", botUsers);
