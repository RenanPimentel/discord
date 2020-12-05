const bomdia = 'https://cdn.discordapp.com/attachments/730098535558545461/782736100171055124/Humanas.jpg';
const paiOn = 'https://cdn.discordapp.com/attachments/218472696030298112/782767656096366622/paitaon.png';
const errorImg = 'https://cdn.discordapp.com/attachments/730098535558545461/782742658404712463/banda.png';

const imgs = require('./imgs');
const { rand, randColor } = require('./random');
const makeEmbed = require("./makeEmbed");
const calc = require('./calc');
const permutation = require('./permutacao');

module.exports = msg => {
    const help = [
        'ajuda',
        'bomdia',
        'calc',
        'permutar'
    ];
    const helpFormatted = `${process.env.PREFIX}${help.join(`\n${process.env.PREFIX}`)}`;

    const commandMsg = msg.content.slice(process.env.PREFIX.length).trim();
    const args = commandMsg.split(/ /g);
    const command = args.shift().toLowerCase().trim();

    const commands = {
        [help[0]]: { value: helpFormatted, img: false },
        [help[1]]: { value: bomdia, img: true },
        [help[2]]: { value: calc(args), img: false },
        [help[3]]: { value: permutation(args), img: false }
    };

    if (command in commands) {
        const title = command.capitalize().trim() + ' ' + args.join(' ').trim();
        const randImgs = imgs[rand(0, imgs.length)];
        const commandValue = commands[command].value;

        if (!commands[command].img) {
            const embed = (typeof commandValue === 'string' && commandValue.startsWith('https://')) ?
                makeEmbed(title, '', randColor(), paiOn, errorImg) :
                makeEmbed(title, commandValue, randColor(), paiOn, randImgs);

            msg.channel.send(embed);
     
        } else {
            const embed = makeEmbed(title, '', randColor(), randImgs, commandValue);
            msg.channel.send(embed);
        }
    }
}
