const Discord = require(`discord.js`);
const config = require("../config.json");

module.exports = {
    name: `hangman`,
    description: `Joue au pendu.`,
    permission: `Aucune`,
    dm: true,
    category: `Jeux`,

    async run(bot, message, args) {
    const wordList = ['javascript', 'discord', 'node', 'api', 'opensource'];
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let lives = 6;
    let wordProgress = new Array(word.length).fill('_');
    let alreadyGuessed = [];

    const hangmanEmbed = new Discord.EmbedBuilder()
      .setColor(config.color)
      .setTitle('Jeu du pendu')
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`Mot à deviner : ${wordProgress.join(' ')}\nNombre de vies restantes : ${lives}\nLettres déjà essayées : ${alreadyGuessed.join(', ')}`)
      .setTimestamp()
      .setFooter({ text: 'Hangman' });

    message.channel.send({embeds: [hangmanEmbed]}).then((msg) => {
      const filter = (m) => m.author.id === message.author.id;
      message.channel
        .awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
        .then((collected) => {
          let guess = collected.first().content;
          if (word.includes(guess) && !alreadyGuessed.includes(guess)) {
            for (let i = 0; i < word.length; i++) {
              if (word[i] === guess) {
                wordProgress[i] = guess;
              }
            }
            if (!wordProgress.includes('_')) {
              return message.channel.send(`Bravo ! Vous avez deviné le mot "${word}" en ${alreadyGuessed.length + 1} coups !`);
            }
          } else {
            lives--;
            if (lives === 0) {
              return message.channel.send(`Vous avez perdu ! Le mot était "${word}"`);
            }
          }
          alreadyGuessed.push(guess);
          hangmanEmbed.setDescription(`Mot à deviner : ${wordProgress.join(' ')}\nNombre de vies restantes : ${lives}\nLettres déjà essayées : ${alreadyGuessed.join(', ')}`);
          msg.edit(hangmanEmbed);
        })
        .catch(() => {
          message.channel.send('Temps écoulé !');
        });
    }).catch((err) => {
      console.error(err);
      message.reply("Une erreur s'est produite lors de l'envoi du message.");
    });
    }
}