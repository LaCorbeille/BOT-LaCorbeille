const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "subtiliser",
    description: "Subtiliser l'avatar d'un membre.",
    permission: "Aucune",
    dm: false,
    category: "Fonctionnalité",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à subtiliser.",
            required: true
        }
    ],

    async run(bot, message, args) {
        let user = await bot.users.fetch(args._hoistedOptions[0].value);
        if(!user) return message.reply("Pas de membre à subtiliser !");
        if(user == bot.user) {            
            try {
                await bot.user.setAvatar(config.avatar);
                await bot.user.setUsername(config.username);
                message.reply(`Je vais subtiliser un être parfait.`);
            } catch (error) {
                console.error(error);
                message.reply(`J'ai la flemme là...`);
            }
        } else {
            try {
                await bot.user.setAvatar(user.avatarURL({ format: 'png', dynamic: true, size: 2048 }));
                await bot.user.setUsername(user.username);
                message.reply(`Hehehe je suis ${user.toString()}`);
            } catch (error) {
                console.error(error);
                message.reply(`J'ai la flemme là...`);
            }
        }
    }
}