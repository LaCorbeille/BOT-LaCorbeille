const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "norris",
    description: "Affiche une blague de Chuck Norris.",
    permission: "Aucune",
    dm: true,
    category: "Fonctionnalité",

    async run(bot, message, args) {
        try {
          const response = await axios.get('http://api.icndb.com/jokes/random');
          const joke = response.data.value.joke;
    
          message.channel.send(joke);
        } catch (error) {
            console.error(`[La Corbeille - gpt] Il y a eu une erreur lors de la communication avec l'API de Chuck Norris.`);
            console.error(error);
            message.channel.send("Il y a eu une erreur lors de la communication avec l'API de Chuck Norris.");
        }
    }
}