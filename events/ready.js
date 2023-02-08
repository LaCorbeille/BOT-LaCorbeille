const Discord = require("discord.js");
const loadSlashCommand = require("../loaders/loadSlashCommands");

module.exports = async bot => {
    await loadSlashCommand(bot);
    console.log(`[La Corbeille - ready] ${bot.user.tag} est prêt !`);
    bot.user.setStatus("dnd");
    bot.user.setActivity("Se fait dev par Noa");
}