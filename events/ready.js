const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json");
const loadSlashCommand = require("../loaders/loadSlashCommands");

module.exports = async bot => {
    await loadSlashCommand(bot);
    console.log(`[LaCorbeille - ready] ${bot.user.tag} est prêt !`);
    bot.user.setStatus(config.status);
    bot.user.setActivity(config.activity);

    try {
        await bot.user.setAvatar(config.avatar);
    } catch (error) {
        //console.error(error);
        console.log(`[LaCorbeille - ready] Impossible de changer l'avatar.`);
    }

    try {
        await bot.user.setUsername(config.username);
    } catch (error) {
        //console.error(error);
        console.log(`[LaCorbeille - ready] Impossible de changer le nom.`);
    }

    // Alert users when bot is ready
    const guild = bot.guilds.cache.get("411196282124894208");
    const version = fs.readFileSync("./VERSION", "utf-8").trim();

    // Check if the file PREVIOUS_VERSION exists
    try {
        fs.accessSync("./PREVIOUS_VERSION", fs.constants.F_OK);
    } catch (error) {
        fs.writeFileSync("./PREVIOUS_VERSION", version, "utf-8");
    }

    const previousVersion = fs.readFileSync("./PREVIOUS_VERSION", "utf-8").trim();

    if (version === previousVersion) {
        console.log(`[LaCorbeille - ready] Le bot est déjà à jour (version ${version}).`);
    } else {
        if (guild) {
            const channel = guild.channels.cache.get("411196282124894210");
            if (channel && channel.isTextBased()) {
                channel.send(`Le bot a été mis à jour vers la version ${version} !`);
                fs.writeFileSync("./PREVIOUS_VERSION", version, "utf-8");
            } else {
                console.log(`[LaCorbeille - ready] Impossible de trouver le salon.`);
            }
        } else {
            console.log(`[LaCorbeille - ready] Impossible de trouver le serveur.`);
        }
    }
}
