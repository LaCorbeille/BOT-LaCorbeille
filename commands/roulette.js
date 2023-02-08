const Discord = require("discord.js");

module.exports = {
    name: "roulette",
    description: "Affiche un gay.",
    permission: "Aucune",
    dm: false,
    category: "Fonctionnalité",

    async run(bot, message, args) {
        const membersArray = Array.from(message.guild.members.cache.values());
        const randomIndex = Math.floor(Math.random() * membersArray.length);
        const randomUser = membersArray[randomIndex];
        message.reply(`<@${randomUser.id}> est gay.`);
    }
}