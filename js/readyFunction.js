function readyFunction(client) {    
    console.log('pai ta on'.toUpperCase());
    const statuses = [
        'FOGOS',
        'SAS',
        'CURIOSO'
    ];
    
    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 45000);
}

module.exports = readyFunction;