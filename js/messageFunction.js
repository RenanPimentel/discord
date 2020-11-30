const imgs = require('./imgs');
const randColor = require("./randomColor");
const rand = require('./randomNumber');
const makeEmbed = require("./makeEmbed");
const checkForMario = require('./mario');

const paiOn = 'https://cdn.discordapp.com/attachments/218472696030298112/782767656096366622/paitaon.png';

function msgFunction(msg, help, commands) {
    if (msg.author.bot) return;
    
    checkForMario(msg);

    if (!msg.content.startsWith(process.env.prefix)) return;

    const commandMsg = msg.content.slice(process.env.prefix.length).trim();
    const args = commandMsg.split(/ /g);
    const command = args.shift().toLowerCase().trim();

    const helpFormatted = `${process.env.prefix}${help.join(`\n${process.env.prefix}`)}`;

    if (command in commands) {
        const title = command.capitalize().trim() + ' ' + args.join(' ').trim();
        const randImgs = imgs[rand(0, imgs.length)];
        const commandValue = commands[command].value;    

        if (!commands[command].img) {
            const embed = makeEmbed(title, commandValue, randColor(), paiOn, randImgs);
            msg.channel.send(embed);
     
        } else {
            const embed = makeEmbed(title, '', randColor(), randImgs, commandValue);
            msg.channel.send(embed);
        }
    }
}

module.exports = msgFunction;
