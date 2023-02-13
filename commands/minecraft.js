const Discord = require("discord.js");
const axios = require("axios");


module.exports = {
    name: "minecraft",
    description: "Affiche les infos du serveur minecraft La Corbeille.",
    permission: "Aucune",
    dm: true,
    category: "Information",

    async run(bot, message, args) {
        let ip = "87.90.5.157";

        try {
            let res = await axios.get(`https://mcapi.us/server/status?ip=${ip}`);
            let data = res.data;
                        
            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle("Serveur Minecraft La Corbeille")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Status :`)
            .addFields(
                { name: "IP du serveur", value: ip, inline: true },
                { name: "IP accessible depuis l'IUT", value: ip+":80", inline: true },
                { name: "Version du serveur", value: data.server.name, inline: false },
                { name: "Statut du serveur", value: data.online ? "En ligne :green_circle:" : "Hors ligne :red_circle:", inline: true },
                { name: "Joueurs en ligne", value: `${data.players.now} / ${data.players.max}`, inline: true }
            )
            .setTimestamp()
            .setFooter({text: "API : mcapi.us"});
            
            await message.reply({embeds: [Embed]})
        } catch (error) {
            console.error(error);
            message.reply("Une erreur est survenue lors de la récupération des informations du serveur.");
        }
    }
}