const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "whois",
    description: "Analyse une adresse IP.",
    permission: "Aucune",
    dm: true,
    category: "Information",
    options: [
        {
            type: "string",
            name: "adresse_ip",
            description: "L'adresse IP à analyser.",
            required: true
        }
    ],

    async run(bot, message, args) {
        const ip = args.getString("adresse_ip");

        if (!ip) {
            return message.reply("Veuillez fournir une adresse IP à analyser.");
        }

        require('dotenv').config();
        const apiKey = process.env.WHOIS_API_KEY;
        const outputFormat = 'JSON';
        const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${ip}&outputFormat=${outputFormat}`;

        try {
            const response = await axios.get(apiUrl);
            const data = response.data;

            let Embed = new Discord.EmbedBuilder()
                .setColor(bot.color)
                .setTitle(`Analyse Whois ${JSON.stringify(data.WhoisRecord.domainName)}`)
                .setTimestamp()
                .setFooter({text: "API : whoisxmlapi.com"});

                // FOR IPV4
                for (const [key, value] of Object.entries(data.WhoisRecord.registryData.registrant)) {
                    if (typeof value === 'object' && value !== null && key !== 'rawText') {
                        for (const [subKey, subValue] of Object.entries(value)) {
                            Embed.addFields(
                                { name: `${key}.${subKey}`, value: subValue.toString(), inline: false }
                            );
                        }
                    } else {
                        Embed.addFields(
                            { name: key, value: value.toString(), inline: false }
                        );
                    }
                }

                Embed.addFields({ name: "Plus d'infos sur", value: `[${ip}](https://www.whois.com/whois/${ip})`});

            message.reply({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
            message.reply("Une erreur s'est produite lors de l'analyse de l'adresse IP.");
        }
    }
};