function calc(args, banda) {
    args.shift();
    args = String(args).replace(/,/g, '');
    if(args.match(/^[A-Za-z]+$/g)) return banda;

    let evaluated = 0;

    try {
        evaluated = eval(args);
    } catch (e) {
        return banda;
    }

    return evaluated;
};

module.exports = calc;