const Discord = require('discord.js');
const client = new Discord.Client();

const ready = require('./js/readyFunction');
const message = require('./js/messageFunction');
const checkForMario = require('./js/mario');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

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