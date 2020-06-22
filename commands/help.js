const { prefix } = require("../config.js");
const Discord = require("discord.js");

module.exports.execute = (client, msg, args) => {
  const data = [];
  const { commands } = msg.client;

  if (!args.length) {
    data.push("Here's a list of all my commands:");
    data.push(commands.map((command) => command.config.name).join(", "));
    data.push(
      `\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`
    );

    return msg.author
      .send(data, { split: true })
      .then(() => {
        if (msg.channel.type === "dm") return;
        msg.reply("I've sent you a DM with all my commands!");
      })
      .catch((error) => {
        console.error(`Could not send help DM to ${msg.author.tag}.\n`, error);
        msg.reply("it seems like I can't DM you!");
      });
  }

  const name = args[0].toLowerCase();
  const command = commands.get(name);

  if (!command) {
    return msg
      .reply("Command not found!")
      .then((m) => m.delete({ timeout: 4200 }));
  }

  data.push(`**Name:** ${command.config.name}`);

  if (command.config.description)
    data.push(`**Description:** ${command.config.description}`);
  if (command.config.usage)
    data.push(
      `**Usage:** ${prefix}${command.config.name} ${command.config.usage}`
    );

  data.push(`**Cooldown:** ${command.config.cooldown} second(s)`);
  data.push(`**Category:** ${command.config.category}`);

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#226699")
    .setTitle(`Command:${command.config.name}`)
    .setDescription(
      `Description: ${command.config.description} \nCategory: ${command.config.category} \n Usage: ${command.config.usage}`
    )
    .setTimestamp()
    .setFooter("GD Discord BOT (c) Andrew Black");

  msg.channel.send(exampleEmbed).then((m) => m.delete({ timeout: 10000 }));
};

module.exports.config = {
  name: "help",
  description: "Help Command",
  category: "misc",
  usage: "help [empty = all]:[command]",
  cooldown: 0,
};
