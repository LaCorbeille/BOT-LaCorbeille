const Discord = require("discord.js");

module.exports = {
    name: "pfc",
    description: "Joue à pierre, feuille, ciseaux.",
    permission: "Aucune",
    dm: true,
    category: "Jeux",

    async run(bot, message, args) {
        
        const filter = m => m.author.id === message.author.id;
        let Embed = new Discord.EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Pierre-Feuille-Ciseaux')
            .setDescription('Choisissez une option en réagissant ci-dessous :')
            .addFields(
                { name: 'Pierre', value: ':moyai:' },
                { name: 'Ciseaux', value: ':scissors:' },
                { name: 'Feuille', value: ':page_facing_up:' },
            )
            .setTimestamp()
            .setFooter({text: "PFC - Pierre, Feuille, Ciseaux"});
    
        await message.channel.send({embeds: [Embed]}).then(sentEmbed => {
            sentEmbed.react('🗿');
            sentEmbed.react('✂️');
            sentEmbed.react('📄');
    
            const collector = sentEmbed.createReactionCollector(filter, { time: 30000 });
    
            collector.on('collect', (reaction, user) => {
                if (reaction.emoji.name === '🗿' && user != bot.user) {
                    message.reply(`Vous avez choisi Pierre! Le bot a choisi ${getBotChoice()}`);
                } else if (reaction.emoji.name === '✂️' && user != bot.user) {
                    message.reply(`Vous avez choisi Ciseaux! Le bot a choisi ${getBotChoice()}`);
                } else if (reaction.emoji.name === '📄' && user != bot.user) {
                    message.reply(`Vous avez choisi Feuille! Le bot a choisi ${getBotChoice()}`);
                }
                collector.stop();
            });
    
            collector.on('end', collected => {
                if (collected.size === 0) {
                    message.reply('Le temps est écoulé! Veuillez réessayer.');
                }
            });
        });
    }
};

function getBotChoice() {
    const choices = ['🗿 Pierre', '✂️ Ciseaux', '📄 Feuille'];
    return choices[Math.floor(Math.random() * choices.length)];
}