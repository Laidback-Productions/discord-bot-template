const { ShardingManager } = require("discord.js");
const { token } = require("./config.js");

const manager = new ShardingManager("./bot.js", {
  token: token,
});

manager.spawn();
manager.on("shardCreate", (shard) =>
  console.log(`Shard Thread launched with ID: ${shard.id}`)
);
