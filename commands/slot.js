const Discord = require(`discord.js`);

module.exports = {
    name: `slot`,
    description: `Fait tourner la machine à sous !`,
    permission: `Aucune`,
    dm: true,
    category: `Jeux`,

    async run(bot, message, args) {
        const options = ['🍇', '🍊', '🍒', '🍋', '🍉'];
        const result1 = options[Math.floor(Math.random() * options.length)];
        const result2 = options[Math.floor(Math.random() * options.length)];
        const result3 = options[Math.floor(Math.random() * options.length)];
        const result = `${result1} | ${result2} | ${result3}`;
        if(result1 == result2 && result2 == result3) {
            message.reply(`\` ${result} \` GG !`);
        } else {
            message.reply(`\` ${result} \``);
        }
    }
}