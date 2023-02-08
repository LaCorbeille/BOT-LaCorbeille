const Discord = require("discord.js");

// BADWORDS
const badwords = [
    "Ta mère la jonquille.",
    "J'te pied bouche.",
    "Fils de chauve.",
    "Fils de Jul.",
    "Tg.",
    "Apprend à te taire.",
    "https://tenor.com/view/awkward-smile-wave-hi-hello-gif-18570699",
    "https://tenor.com/view/rick-and-morty-mr-poopy-butt-hole-ooooh-weeee-gif-9826117",
    "https://tenor.com/view/nounours-bonne-nuit-bonne-nuit-les-petits-bonne-nuit-les-tipeus-mange-tes-morts-gif-17991623",
    "https://tenor.com/view/shook-cant-ne-not-me-who-oop-gif-13118919",
    "https://tenor.com/view/cloud-fly-teddy-bear-good-night-gif-11331077",
    "https://tenor.com/view/steve-harvey-smh-shake-my-head-shocked-surprised-gif-5057255"];

module.exports = async (bot, message) => {
    // LGBT FLAG
    if(message.content.toLowerCase().includes('lgbt')||message.content.toLowerCase().includes('gay')) {
        message.reply(':rainbow:');
    } 
    // RANDOM BADWORD
    if (Math.random() < 0.1) {
        let randomIndex = Math.floor(Math.random() * badwords.length);
        message.reply(badwords[randomIndex]);
    } else {
        if (message.content.toLowerCase().endsWith('quoi')) {
            if (Math.random() < 0.1) {
                message.reply('QUOICOUBEH!');
            } else {
                message.reply('feur.');
            }
        } else if (message.content.toLowerCase().endsWith('rouge')) {
            message.reply('gorge');
            message.reply('profonde');
            message.reply(':eggplant: :sweat_drops:');
        } else if (message.content.toLowerCase().endsWith('oui')) {
            message.reply('fi');   
        } else if (message.content.toLowerCase().endsWith('non')) {
            message.reply('bril');   
        }
    }
}