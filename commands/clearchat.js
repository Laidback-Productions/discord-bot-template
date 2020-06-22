module.exports.execute = (client, msg, args) => {
  console.log(`Chat clear issued by ${msg.author}`);
  if (isFinite(args) && args.length > 0) {
    if (Number(args) <= 25) {
      const del_limit = Number(args) + 1;
      async function clear() {
        msg.delete();
        let fetched = await msg.channel.messages.fetch({
          limit: del_limit,
        });
        msg.channel.bulkDelete(fetched);
      }
      clear();
    } else {
      msg.reply("The max deletion is set to 25.");
    }
  } else {
    msg.channel.send("You didn't provide any args.");
  }
};

module.exports.config = {
  name: "clearchat",
  description: "Chat clearing command",
  category: "moderation",
  usage: "clearchat <n>",
  cooldown: 0,
};
