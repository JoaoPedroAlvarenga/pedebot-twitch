require("./prototype/removeSpecialKey");
const { client } = require("./config/client");
const { commands, specialKey } = require("../config.json");

function botUsers(channel, tags, message, self) {
  if (self) return; // Ignore messages from the bot
  const responseMessage = (message) => { client.say(channel, message) }

  const messageLower = message.toLowerCase();
  const messageTyped = messageLower.removeSpecialKey(specialKey);
  const messageSplit = messageTyped.split(" ")
  const messageCommands = messageSplit[0]
  const messageParams = messageSplit.slice(1)

  const savedCommand = commands[messageCommands];

  if (savedCommand) {
    const savedCommandSelf = savedCommand[0]
    const savedCommandParams = savedCommand[2]

    if (messageParams.length == 0) {
      responseMessage(savedCommandSelf)
    }

    if (messageParams.length !== 0) {
      const savedCommandParamsResponse = savedCommandParams[messageParams[0]]
      savedCommandParamsResponse && responseMessage(savedCommandParamsResponse)
    }

  }
}

module.exports = { botUsers };
