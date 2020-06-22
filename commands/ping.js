module.exports.execute = (client, msg, args) => {
  msg.channel.send(`Pong ${msg.author}!`);
};

module.exports.config = {
  name: "ping",
  description: "Development Test Command",
  category: "dev",
  usage: "ping",
  cooldown: 0,
};
