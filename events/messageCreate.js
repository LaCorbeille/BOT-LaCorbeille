const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

module.exports = async (bot, message) => {
    // RANDOM RICKROLL
    if(Math.random() < 0.0025) {
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('le bouton.')
                .setStyle(ButtonStyle.Link)
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
        );    
        await message.reply({ content: 'Je pense que tu ne devrais pas toucher', components: [row] });
    }
}