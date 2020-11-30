const Discord = require('discord.js');
const client = new Discord.Client();

const ready = require('./js/readyFunction');
const message = require('./js/messageFunction');
const calc = require('./js/calc');
const permutation = require('./js/permutacao');
const bomdia = 'https://cdn.discordapp.com/attachments/730098535558545461/782736100171055124/Humanas.jpg';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

client.on('ready', () => ready(client));

client.on('message', msg => {
    const help = [
        'ajuda',
        'bomdia',
        'calc',
        'permutar'
    ];

    const commands = {
        [help[0]]: { value: helpFormatted, img: false },
        [help[1]]: { value: bomdia, img: true },
        [help[2]]: { value: calc(args), img: false },
        [help[3]]: { value: permutation(args), img: false }
    };

    message(msg, commands, help);
});

client.login(process.env.token);