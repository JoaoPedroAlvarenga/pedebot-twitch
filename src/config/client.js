const tmi = require("tmi.js");
const optionsConfig = require("./optionsConfig");
const client = new tmi.Client(optionsConfig);
client.connect();

module.exports = { client };
