const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    const statuses = [
        'FOGOS',
        'SAS',
        'CURIOSO'
    ];

    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 1000);
});

client.on('message', msg => {

});

client.login(process.env.token);