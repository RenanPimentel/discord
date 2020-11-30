const Discord = require('discord.js');

const rand = require('./randomNumber');

function makeEmbed(title, description, color, thumb, img) {
    const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setThumbnail(thumb)
        .setImage(img)
        .setTimestamp(new Date());
    
    return embed;
}

module.exports = makeEmbed;
