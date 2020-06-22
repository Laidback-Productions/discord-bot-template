# Compatibility

> Note: we are using the latest v12 engine.

## Known changes

- Size getter functions

```
- client.users.get('123456789012345678');
+ client.users.cache.get('123456789012345678');

- channel.messages.get('123456789012345678');
+ channel.messages.cache.get('123456789012345678');

- guild.members.get('123456789012345678');
+ guild.members.cache.get('123456789012345678');
```

### For more in-depth writeups

[Visit DiscordJS.GUIDE](https://discordjs.guide/additional-info/changes-in-v12.html#roles)
