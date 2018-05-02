const fs = require('fs')
const utils = module.exports = {}
const chalk = require('chalk')

utils.data = require('./database.json')

utils.save = function () {
  fs.writeFile("./database.json", JSON.stringify(utils.data), err => {
    if (err) {
      throw err
    }
  })
}

utils.setupForNewGuild = function (guild) {
  utils.data[guild.id] = {
    prefix: ';'
  }
  utils.save()
  console.log(chalk.green(`Guild ${guild.name} has been succesfully set up.`))
}

utils.changePrefix = function (guildID, newPrefix) {
  utils.data[guildID].prefix = newPrefix
  utils.save()
}
