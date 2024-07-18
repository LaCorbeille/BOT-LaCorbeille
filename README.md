# BOT - LaCorbeille

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=discord,bots,vscode,js,nodejs,docker,github,githubactions"/></a>

LaCorbeille is a simple bot discord.
<br>
Find the community [here](https://discord.gg/hmPzS4k)
<br>
Or go to LaCorbeille STUDIO [website](https://lacorbeille.studio) !

<img src="https://img.shields.io/github/actions/workflow/status/LaCorbeille/BOT-LaCorbeille/deploy.yml?label=Deploy" />

## Requirements
- Docker
- Node.js
- Create a Discord application and obtain the bot token from [Discord Developers](https://discord.com/developers/applications).

## Settin up the repository
1. On [GitHub](https://github.com/), open your repository.
2. Go to `Settings`.
3. Then drop `Secrets and variables` to open `Actions`.
4. In `Repository secrets`, put the SFTP variables to fill `deploy.yml`.
    - SFTP_SERVER
    - SFTP_USERNAME
    - SFTP_PASSWORD
6. Don't forget to click on `Add secret` button below.

## Setting up the bot
1. Clone the repository: ```git clone https://github.com/LaCorbeille/BOT-LaCorbeille.git```
2. Create a .env file and add a field ```DISCORD_TOKEN=``` followed by your [Discord bot](https://discord.com/developers/applications) token.
4. Navigate to the directory where you cloned the bot.
5. Build the Docker containers: ```docker-compose build```
6. Start the Docker containers in detached mode: ```docker-compose up -d```
7. Verify if the container is created correctly: ```docker ps -a```
8. Check the logs for any issues: ```docker logs -f <container-id>```

## Usage
Type ```/help``` to get help on a server
