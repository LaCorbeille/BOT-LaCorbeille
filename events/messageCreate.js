const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

// GIF
const gifList = [
    "https://tenor.com/view/awkward-smile-wave-hi-hello-gif-18570699",
    "https://tenor.com/view/rick-and-morty-mr-poopy-butt-hole-ooooh-weeee-gif-9826117",
    "https://tenor.com/view/nounours-bonne-nuit-bonne-nuit-les-petits-bonne-nuit-les-tipeus-mange-tes-morts-gif-17991623",
    "https://tenor.com/view/shook-cant-ne-not-me-who-oop-gif-13118919",
    "https://tenor.com/view/cloud-fly-teddy-bear-good-night-gif-11331077",
    "https://tenor.com/view/steve-harvey-smh-shake-my-head-shocked-surprised-gif-5057255"];

module.exports = async (bot, message) => {
    // RANDOM GIF or RICKROLL
    if (Math.random() < 0.1) {
        if(Math.random() < 0.1) {
            // RICKROLL
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('le bouton.')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),
            );    
            await message.reply({ content: 'Je pense que tu ne devrais pas toucher', components: [row] });
        } else {
            // GIF
            let randomIndex = Math.floor(Math.random() * gifList.length);
            message.reply(gifList[randomIndex]);
        }
    }
}