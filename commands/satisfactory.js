const Discord = require("discord.js");
const axios = require("axios");


module.exports = {
    name: "satisfactory",
    description: "Affiche les infos du serveur satisfactory LaCorbeille.",
    permission: "Aucune",
    dm: true,
    category: "Information",

    async run(bot, message, args) {
        let ip = "sf.lacorbeille.studio";
        let port = "7777";

        try {
            Embed.setColor(bot.color)
                .setTitle("Serveur Satisfactory LaCorbeille")
                .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`Status :`)
                .addFields(
                    { name: "IP du serveur", value: ip, inline: true },
                    { name: "Port du serveur", value: port, inline: true }
                )
                .setTimestamp()
                .setFooter({ text: "Satisfactory" });
                
            await message.reply({ embeds: [Embed] })
        } catch (error) {
            console.error(error);
            message.reply("Le serveur semble être éteint.");
        }
    }
}