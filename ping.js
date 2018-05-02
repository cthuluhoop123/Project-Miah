const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {
const newemb = new Discord.RichEmbed()
.setColor(0xFFBF00)
.addField('```Latency: ```', new Date().getTime() - message.createdTimestamp + " ms ")
message.channel.send({embed: newemb})
}

//    	message.channel.send(`My current latency is \`${client.ping} ms\``);      
// }