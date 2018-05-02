const Discord = require('discord.js')
const utils = require('../utils.js')

exports.run = async function (message, args) {
  utils.changePrefix(message.guild.id, args[0])
  const embed = new Discord.RichEmbed()
    .setColor('#ffffff')
    .setDescription(`Prefix has been updated to: ${utils.data[message.guild.id].prefix}`)
  message.channel.send({ embed: embed })
}

exports.help = {
  info: 'Change the prefix for this bot in your guild.'
}