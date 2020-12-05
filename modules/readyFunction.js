String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

module.exports = client => {
    console.log('pai ta on'.toUpperCase());
    const statuses = [
        `${process.env.PREFIX}ajuda`,
        'FOGOS',
        'SAS',
        'Carrinhos 2',
        'Momong',
        'Cloud 9'
    ];

    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: "PLAYING" });
    }, 45000);
}
