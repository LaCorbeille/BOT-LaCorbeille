# BOT - LaCorbeille

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=discord,bots,vscode,js,nodejs,github,githubactions"/></a>

LaCorbeille is a simple bot discord. Find the community [here](https://discord.gg/hmPzS4k)

## Requirements
- Docker
- Node.js
- Create a Discord application and obtain the bot token from [Discord Developers](https://discord.com/developers/applications).

## Setting up the bot
1. Clone the repository: ```git clone https://github.com/LaCorbeille/BOT-La-Corbeille.git```
2. Create a .env file and add a field ```DISCORD_TOKEN=``` followed by your Discord bot token.
4. Navigate to the directory where you cloned the bot.
5. Build the Docker containers: ```docker-compose build```
6. Start the Docker containers in detached mode: ```docker-compose up -d```
7. Verify if the container is created correctly: ```docker ps -a```
8. Check the logs for any issues: ```docker logs -f <container-id>```

## Usage
Type ```/help``` to get help on a server
