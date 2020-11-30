function readyFunction(client) {    
    console.log('pai ta on'.toUpperCase());
    const statuses = [
        `${process.env.prefix}ajuda`,
        'FOGOS',
        'SAS',
        'Carrinhos 2',
        
    ];
    
    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 45000);
}

module.exports = readyFunction;
