const Discord = require('discord.js');
const client = new Discord.Client();

const ready = require('./modules/readyFunction');
const message = require('./modules/messageFunction');
const checkForMario = require('./modules/mario');

client.on('ready', () => ready(client));

client.on('message', msg => {
    if (msg.author.bot) return;

    if (!msg.content.startsWith(process.env.prefix)) {
        checkForMario(msg);
        return;
    }
    
    message(msg);
});

client.login(process.env.token);