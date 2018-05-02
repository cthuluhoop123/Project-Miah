import { constants } from 'zlib';

const Discord = require('discord.js')
const client = new Discord.Client()

const defaultPrefix = ';'

const chalk = require('chalk')

const credentials = require('./credentials.json')

client.on('ready', () => console.log(chalk.green('Ready')))

client.on('message', message => {
  //handle command
})

client.login(credentials.token)