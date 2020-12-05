const errorImg = 'https://cdn.discordapp.com/attachments/730098535558545461/782742658404712463/banda.png';

module.exports = commandArgs => {
    const argsString = commandArgs.join(' ').trim();

    if(!argsString) return 'escreva alguma equação.';
    if (argsString.match(/^[A-Za-z]+$/g)) return errorImg;

    let calculus = 0;

    try {
        calculus = eval(argsString);
    } catch (e) {
        return errorImg;
    }

    return calculus;
};
