# BOT - LaCorbeille

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=discord,bots,vscode,js,nodejs,github,githubactions"/></a>

LaCorbeille is a simple bot discord. Find the community [here](https://discord.gg/hmPzS4k)

## Requirements
- Docker
- Node.js
- Create a Discord application and obtain the bot token from [Discord Developers](https://discord.com/developers/applications).

## Setting up the bot
1. Clone the repository: ```git clone https://github.com/LaCorbeille/BOT-La-Corbeille.git```
2. Fill in the token field in [config.json](https://github.com/YoruKiwi/BOT-LaCorbeille/blob/main/config.json) with your Discord bot token.
3. Navigate to the directory where you cloned the bot.
4. Build the Docker containers: ```docker-compose build```
5. Start the Docker containers in detached mode: ```docker-compose up -d```
6. Verify if the container is created correctly: ```docker ps -a```
7. Check the logs for any issues: ```docker logs -f <container-id>```

## Usage
Type ```/help``` to get help on a server