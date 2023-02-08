const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "gpt",
    description: "Dialogue avec l'IA ChatGPT.",
    permission: "Aucune",
    dm: true,
    category: "Fonctionnalité",

    async run(bot, message, args) {        
        // Vérifier le type de données de args et le convertir en tableau si nécessaire
        if (!Array.isArray(args)) {
            args = [args];
        }
        // Récupérer le message envoyé par l'utilisateur
        let userMessage = args.join(" ");
        // Appeler l'API de OpenAI en envoyant le message de l'utilisateur
        axios
        .post("https://api.openai.com/v1/engines/davinci/completions", {
            prompt: userMessage,
            max_tokens: 100,
            n: 1,
            stop: "",
            temperature: 0.5,
        }, {
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer YOUR OPEN AI API KEY`,
            },
        })
        .then((response) => {
            // Récupérer la réponse de ChatGPT
            let chatResponse = response.data.choices[0].text;

            // Envoyer la réponse de ChatGPT au canal Discord
            message.channel.send(chatResponse);
        })
        .catch((error) => {
            console.error(`[La Corbeille - gpt] Il y a eu une erreur lors de la communication avec l'API de OpenAI.`);
            console.error(error);
            message.channel.send("Il y a eu une erreur lors de la communication avec l'API de OpenAI.");
        });
    }
}