const Discord = require(`discord.js`);

module.exports = {
    name: `dice`,
    description: `Lance un dé à 6 faces.`,
    permission: `Aucune`,
    dm: true,
    category: `Jeux`,

    async run(bot, message, args) {
        const maxValue = 6;
        const result = Math.floor(Math.random() * maxValue) + 1;
        message.reply(`:game_die:  \`${result}\``);
    }
}