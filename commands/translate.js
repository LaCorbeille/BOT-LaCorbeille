const Discord = require("discord.js");
const axios = require("axios");
//https://api.funtranslations.com/

module.exports = {
    name: "translate",
    description: "Traduis un text avec des langues de science-fiction !",
    permission: "Aucune",
    dm: true,
    category: "Information",
    options: [
        {
            type: "string",
            name: "langue",
            description: "La langue à utiliser.",
            required: true
        }, {
            type: "string",
            name: "texte",
            description: "Le texte à traduire.",
            required: true
        }
    ],

    async run(bot, message, args) {}
}