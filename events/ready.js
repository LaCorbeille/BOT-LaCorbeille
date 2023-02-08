const Discord = require("discord.js");
const config = require("../config.json");
const loadSlashCommand = require("../loaders/loadSlashCommands");

module.exports = async bot => {
    await loadSlashCommand(bot);
    console.log(`[La Corbeille - ready] ${bot.user.tag} est prêt !`);
    bot.user.setStatus(config.status);
    bot.user.setActivity(config.activity);

    try {
        await bot.user.setAvatar(config.avatar);
    } catch (error) {
        //console.error(error);
        console.log(`[La Corbeille - ready] Impossible de changer l'avatar.`);
    }
    
    try {
        await bot.user.setUsername(config.username);
    } catch (error) {
        //console.error(error);
        console.log(`[La Corbeille - ready] Impossible de changer le nom.`);
    }   
}