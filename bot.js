const Discord = require('discord.js')
const client = new Discord.Client()

const utils = require('./utils.js')

const chalk = require('chalk')

const credentials = require('./credentials.json')

client.on('ready', async () => {
  console.log(chalk.green('Ready'))
  let invite = await client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
  console.log(chalk.blue(invite))
})

client.on('message', message => {
  if (message.channel.type != 'text') return
  if (message.author.bot) return

  const currentGuild = utils.data[message.guild.id]

  if (!currentGuild) return
  if (message.content.startsWith(currentGuild.prefix)) {
    let command = message.content.split(' ')[0].substring(currentGuild.prefix.length)
    let args = message.content.split(' ')
    args.shift()

    try {
      require(`./commands/${command}`).run(message, args)
      delete require.cache[require.resolve(`./commands/${command}`)]
    } catch (error) {
      return
    }
  }
})

client.on('guildCreate', guild => {
  require('./events/guildCreate.js').run(client, guild)
  delete require.cache[require.resolve('./events/guildCreate.js')]
})

client.login(credentials.token)