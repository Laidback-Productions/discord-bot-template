const { prefix } = require("../config.js");

module.exports = (client, msg) => {
  let args = msg.content.substring(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (msg.channel.type == "dm") return;
  if (!msg.author.bot) console.log(`${msg.author.username}: ${msg.content}`);
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  if (!client.commands.has(command))
    return msg.channel
      .send("Command not found")
      .then((m) => m.delete({ timeout: 4200 }));

  try {
    client.commands.get(command).execute(client, msg, args);
  } catch (error) {
    msg.channel
      .send(`Command not executed or implemented nor found! \nError: ${error}`)
      .then((m) => m.delete({ timeout: 4200 }));
  }
};
