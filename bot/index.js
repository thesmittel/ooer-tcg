// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');

const path = require('node:path');
const fs = require("fs")

let data = JSON.parse(fs.readFileSync(__dirname + "/data/users.json").toString());

// Create a new client instance
const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(foldersPath);

for (const file of commandFiles) {
    const filePath = path.join(foldersPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
    
}

client.on('messageCreate', (message) => {

    console.log(client.commands.find(c => c.name === "view"))
});
    
// Log in to Discord with your client's token
client.login(config.token);
setTimeout(() => {
    
console.log(client.guilds)
}, 1000);