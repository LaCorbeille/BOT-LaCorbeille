const Discord = require(`discord.js`);

module.exports = {
    name: `fact`,
    description: `Affiche un fait.`,
    permission: `Aucune`,
    dm: false,
    category: `Fonctionnalité`,

    async run(bot, message, args) {        
        // Random User
        const membersArray = Array.from(message.guild.members.cache.values());
        const randomUserIndex = Math.floor(Math.random() * membersArray.length);
        const randomUser = membersArray[randomUserIndex];

        // Random User2
        const randomUser2 = membersArray[randomUserIndex];

        // Declare Facts                
        const facts = [
            `Le ciel est bleu. <@${randomUser.id}> est con.`,
            `La terre est plate. <@${randomUser.id}> aussi.`,
            `<@${randomUser.id}> est gay et refoulé.`,
            `<@${randomUser.id}> se travesti le samedi soir.`,
            `<@${randomUser.id}> est une personne différente.`,
            `<@${randomUser.id}> aime <@${randomUser2.id}>.`,
            `<@${randomUser.id}> est hétéro. (ça reste à prouver)`,
            `<@${randomUser.id}> est raciste.`,
            `<@${randomUser.id}> est beaucoup trop sympa.`,
            `<@${randomUser.id}> est un pédophile recherché par le secrétariat.`];

        // Random Fact
        let randomFactIndex = Math.floor(Math.random() * facts.length);
        await message.reply(facts[randomFactIndex]);
    }
}