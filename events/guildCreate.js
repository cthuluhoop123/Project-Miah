const utils = require('../utils.js')

exports.run = function (client, guild) {
  utils.setupForNewGuild(guild)
  client.users.get(guild.ownerID).send('Hello, I have joined your server!')
}
