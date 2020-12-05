const rand = require('./random');

module.exports = string => {
    const words = [];
    for (word of string) {
        let wordArray = [ ...word ];

        wordArray.forEach((el, i, arr, j = rand(i, arr.length)) =>
            [arr[i], arr[j]] = [arr[j], arr[i]]);

        words.push(wordArray.join(''));
    }

    return words.join(' ');
}
