const Discord = require("discord.js");

module.exports = {
    name: "clear",
    description: "Effacer des messages.",
    permission: Discord.PermissionFlagsBits.ManageMessages,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "number",
            name: "nombre",
            description: "Le nombre de messages à supprimer.",
            required: true
        }, {
            type: "channel",
            name: "salon",
            description: "Le salon dans lequel effacer les messages.",
            required: false
        }
    ],

    async run(bot, message, args) {
        let channel = args.getChannel("salon");
        if(!channel) channel = message.channel;
        if(channel.id !== message.channel.id && !message.guild.channels.cache.get(channel.id)) return message.reply("Pas de salon !");

        let number = args.getNumber("nombre");
        if(parseInt(number) <= 0 || parseInt(number) > 100) return message.reply("Il faut un nombre entre 0 et 100 inclus !");
        
        await message.deferReply();

        try {
            let messages = await channel.bulkDelete(parseInt(number));
            await message.followUp({content: `J'ai supprimé les \`${messages.size}\` message(s) dans le salon ${channel} !`, ephemeral: true});
        } catch (err) {
            let messages = [...(await channel.messages.fetch()).filter(msg => !msg.interaction && (Date.now() - msg.createdAt) <= 1209600000).values()];
            if(messages.length <= 0) return message.followUp("Aucun message à supprimer. Ils datent de plus de 14 jours !");
            await channel.bulkDelete(messages);
            await message.followUp({content: `J'ai supprimé seulement \`${messages.length}\` message(s) dans le salon ${channel} car les autres datent de plus de 14 jours !`, ephemeral: true});
        }
    }
}