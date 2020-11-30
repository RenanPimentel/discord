const Discord = require('discord.js');
const client = new Discord.Client();

const ready = require('./js/readyFunction');
const message = require('./js/messageFunction');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

client.on('ready', () => ready(client));

client.on('message', msg => {
    if (msg.author.bot) return;
    
    checkForMario(msg);

    if (!msg.content.startsWith(process.env.prefix)) return;

    message(msg);
});

client.login(process.env.token);