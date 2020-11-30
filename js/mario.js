const marios = [
    'https://cdn.discordapp.com/attachments/218472696030298112/782746868971077692/Fumasa.jpg',
    'https://cdn.discordapp.com/attachments/218472696030298112/782746870078242816/Fumasa.png',
    'https://cdn.discordapp.com/attachments/218472696030298112/782746870182051841/Mairo.jpg'
    
];

function marioInMsg(msg) {
    const message = msg.content.toLowerCase();
    if (message.includes('mario') || message.includes('fumasa')) {
        return true;
    }
    return false;
}

function displayMario(msg) {
    if (msg.author.bot) return;
    if (marioInMsg(msg)) {
        msg.channel.send(marios[rand()]);
        return;
    }
}

function rand(min=0, max=2) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = displayMario;