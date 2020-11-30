const Discord = require('discord.js');
const client = new Discord.Client();

const bomdia = 'https://cdn.discordapp.com/attachments/730098535558545461/782736100171055124/Humanas.jpg';

const calc = require('./js/calc');
const readyFunction = require('./js/readyFunction');
const checkForMario = require('./js/mario');
const permutation = require('./js/permutacao');

client.on('ready', () => readyFunction(client));

client.on('message', msg => {
    checkForMario(msg);
    if (msg.author.bot || !msg.content.startsWith(process.env.prefix)) return;

    const commandBody = msg.content.slice(process.env.prefix.length).trim();
    const args = commandBody.trim().split(' ');
    const command = args[0].toLowerCase();

    const help = [
        'ajuda',
        'bomdia',
        'calc',
        'permutar'
    ];
    
    const commands = {
        [help[0]]: `${process.env.prefix}${help.join(`\n${process.env.prefix}`)}`,
        [help[1]]: bomdia,
        [help[2]]: calc(args),
        [help[3]]: permutation(args)
    };

    if (command in commands) {
        msg.channel.send(commands[command]);
    }
});

client.login(process.env.token);