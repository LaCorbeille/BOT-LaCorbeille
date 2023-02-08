const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kick un membre.",
    permission: Discord.PermissionFlagsBits.KickMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à kick.",
            required: true
        }, {
            type: "string",
            name: "raison",
            description: "La raison du kick.",
            required: false
        }
    ],

    async run(bot, message, args) {
        let user = args.getUser("membre");
        if(!user) return message.reply("Pas de membre à kick !");
        let member = message.guild.members.cache.get(user.id);
        if(!member || typeof member === 'undefined') return message.reply("Pas de membre à kick !");
        
        let reason = args.getString("raison");
        if(!reason) reason = "la raison n'as pas été précisée.";

        if(message.user.id === user.id) return message.reply("Tu ne peux pas te kick !");
        if((await message.guild.fetchOwner()).id === user.id) return message.reply("Tu ne peux pas kick le propriétaire du serveur !");
        if(member && !member?.kickable) return message.reply("Impossible de kick ce membre !");
        if(member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply("Tu ne peux pas kick un membre qui te surpasse.");

        try {
            await user.send(`Tu as été kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${reason}\``);
            await message.reply(`${message.user} a kick ${user.tag} pour la raison : \`${reason}\``);
            await member.kick(reason);
        } catch (err) {}
    }
}