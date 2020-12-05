const Discord = require('discord.js');

const errorImg = 'https://cdn.discordapp.com/attachments/730098535558545461/782742658404712463/banda.png';

module.exports = (title, description, color, thumb, img=errorImg) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setThumbnail(thumb)
        .setImage(img)
        .setTimestamp(new Date());
    
    return embed;
}
