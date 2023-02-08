const Discord = require(`discord.js`);

module.exports = {
    name: `flip`,
    description: `Lance une pièce.`,
    permission: `Aucune`,
    dm: true,
    category: `Jeux`,

    async run(bot, message, args) {
        const options = ['pile', 'face'];
        const result = options[Math.floor(Math.random() * options.length)];
        message.reply(`:coin:  \`${result}\``);
    }
}