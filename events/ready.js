module.exports = (client) => {
  client.user.setActivity("Working.", {
    type: "PLAYING",
  });
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`
  );
  console.log(`${client.user.username} is ready!`);
};
