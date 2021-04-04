const tmi = require("tmi.js");
const botConfig = require("./botConfig");
const client = new tmi.Client(botConfig);
client.connect();

module.exports = { client };
