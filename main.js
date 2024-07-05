const config = require("./config.json");
const loadCommands = require("./loaders/loadCommands.js");
const loadEvents = require("./loaders/loadEvents.js");
const Discord = require('discord.js');
const { DiscordAPIError } = require('discord.js');
const bot = new Discord.Client({ intents: config.intents });

bot.config = config;
bot.commands = new Discord.Collection();
bot.color = config.color;

bot.login(config.token);
loadCommands(bot);
loadEvents(bot);