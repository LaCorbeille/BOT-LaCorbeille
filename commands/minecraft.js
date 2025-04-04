const Discord = require("discord.js");
const axios = require("axios");


module.exports = {
    name: "minecraft",
    description: "Affiche les infos du serveur minecraft LaCorbeille.",
    permission: "Aucune",
    dm: true,
    category: "Information",

    async run(bot, message, args) {
        let ip = "mc.lacorbeille.studio";

        try {
            let res = await axios.get(`https://mcapi.us/server/status?ip=${ip}`);
            let data = res.data;
            let Embed = new Discord.EmbedBuilder();
            let durationInMillis = Math.floor(data.duration / 10000000);
                        
            if (data.online) {
                Embed.setColor(bot.color)
                .setTitle("Serveur Minecraft LaCorbeille")
                .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
                .setDescription(`Status :`)
                .addFields(
                    { name: "IP du serveur", value: ip, inline: true },
                    { name: "Version du serveur", value: data.server.name, inline: false },
                    { name: "Statut du serveur", value: data.online ? "En ligne :green_circle:" : "Hors ligne :red_circle:", inline: true},
                    { name: "Latence", value: durationInMillis+"ms", inline: true},
                    { name: "Joueurs en ligne", value: `${data.players.now} / ${data.players.max}`, inline: true },
                    { name: "Map interactive", value: "http://"+ip+":8100", inline: true }
                )
                .setTimestamp()
                .setFooter({text: "API : mcapi.us"});
            } else {
                Embed.setColor(bot.color)
                .setTitle("Serveur Minecraft LaCorbeille")
                .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
                .setDescription(`Status :`)
                .addFields(
                    { name: "IP du serveur", value: ip, inline: true },
                    { name: "Statut du serveur", value: data.online ? "En ligne :green_circle:" : "Hors ligne :red_circle:", inline: false }
                )
                .setTimestamp()
                .setFooter({text: "API : mcapi.us"});
            }            
            
            await message.reply({embeds: [Embed]})
        } catch (error) {
            console.error(error);
            message.reply("Le serveur semble être éteint.");
        }
    }
}