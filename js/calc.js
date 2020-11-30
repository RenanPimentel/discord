const banda = 'https://cdn.discordapp.com/attachments/730098535558545461/782742658404712463/banda.png';

function calc(args) {
    args.shift();
    const calculate = args.join(' ');

    if(!args.length) return 'escreva alguma equação';
    if (calculate.match(/^[A-Za-z]+$/g)) return banda;

    let evaluated = 0;

    try {
        evaluated = eval(calculate);
    } catch (e) {
        return banda;
    }

    return evaluated;
};

module.exports = calc;
