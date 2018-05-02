const Discord = require('discord.js')

exports.run = async function (message, args) {
  const embed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setDescription(`Pong! 🏓 ${Date.now() - message.createdTimestamp}ms`)
  message.channel.send({ embed: embed })
}

exports.help = {
  info: 'Pings to see if selfbot is online.'
}