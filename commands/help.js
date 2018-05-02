const fs = require('fs')
const Discord = require('discord.js')

exports.run = function (message, args) {
  fs.readdir(__dirname, (err, files) => {
    let helpInfo = ''

    for (let file of files) {
      helpInfo += `**${file.substring(0, file.length - 3)}:** ${require(`./${file}`).help.info}\n`
    }

    const embed = new Discord.RichEmbed()
      .setDescription(helpInfo)
    message.channel.send({ embed: embed })
  })
}

exports.help = {
  info: 'Lists all commands.'
}