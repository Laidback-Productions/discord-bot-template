module.exports.execute = (client, msg, args) => {
  msg.channel.send(`Template command ran successfully!`);
};

module.exports.config = {
  name: "template",
  description: "Development Template Command",
  category: "template",
  usage: "template",
  cooldown: 0,
};
