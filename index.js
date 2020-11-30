const Discord = require('discord.js');
const client = new Discord.Client();

const calc = require('./js/calc');
const readyFunction = require('./js/readyFunction');
const checkForMario = require('./js/mario');
const permutation = require('./js/permutacao');
const randColor = require('./js/randomColor');
const rand = require('./js/randomNumber');

const bomdia = 'https://cdn.discordapp.com/attachments/730098535558545461/782736100171055124/Humanas.jpg';
const paiOn = 'https://cdn.discordapp.com/attachments/218472696030298112/782767656096366622/paitaon.png';
const cursedImages = require('./js/imgs');

client.on('ready', () => readyFunction(client));

client.on('message', msg => {
    if (msg.author.bot) return;
    
    checkForMario(msg);

    if (!msg.content.startsWith()) return;

    const commandMsg = msg.content.slice(process.env.prefix.length).trim();
    const args = commandMsg.split(' ');
    const command = args.shift().toLowerCase().trim();

    const help = [
        'ajuda',
        'bomdia',
        'calc',
        'permutar'
    ];
    const helpFormatted = `${process.env.prefix}${help.join(`\n${process.env.prefix}`)}`;

    const commands = {
        [help[0]]: { value: helpFormatted, img: false },
        [help[1]]: { value: bomdia, img: true },
        [help[2]]: { value: calc(args), img: false },
        [help[3]]: { value: permutation(args), img: false }
    };
    
    if (command in commands) {
        if (!commands[command].img) {
            const embed = new Discord.MessageEmbed()
                .setTitle(command.capitalize().trim() + ' ' + args.join(' ').trim())
                .setDescription(commands[command].value)
                .setColor(randColor())
                .setThumbnail(paiOn)
                .setImage(cursedImages[rand(0, cursedImages.length)])
                .setTimestamp(new Date());
     
            msg.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(command.capitalize().trim() + ' ' + args.join(' ').trim())
                .setColor(randColor())
                .setThumbnail(cursedImages[rand(0, cursedImages.length)])
                .setImage(commands[command].value)
                .setTimestamp(new Date());
     
            msg.channel.send(embed);
        }
    }
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

client.login(process.env.token);