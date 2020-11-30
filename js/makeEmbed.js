const rand = require('./randomNumber');

function makeEmbed(title, description, color, thumb, imgs) {
    const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setThumbnail(thumb)
        .setImage(imgs[rand(0, imgs.length)])
        .setTimestamp(new Date());
    
    return embed;
}

module.exports = makeEmbed;
