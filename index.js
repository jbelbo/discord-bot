require('dotenv').config()
const { Client, Intents } = require('discord.js')
const axios = require('axios')

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})
const targets = ['AnRa', 'CEO', 'Tony']
const responses = ['No seas pelotudo @herbrando']

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}`)
})

bot.on('messageCreate', (msg) => {
  if (msg.author.bot) return

  const foundWord = targets.find((target) => msg.content.includes(target))
  if (foundWord) {
    msg.channel.send(`${responses[0]}`)
  }
})

bot.login(process.env.TOKEN)
