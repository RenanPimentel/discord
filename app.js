const ajuda = [
    'ajuda',
    'bomdia',
    'calc',
    'permutar'
];

const commands = {
    [ajuda[0]]: `${process.env.token}${ajuda.join('\n')}`,
    [ajuda[1]]: 'bomdia',
    [ajuda[2]]: 'calc(args, banda)',
    [ajuda[3]]: 'permutation(args)'
};

console.log(commands[ajuda[0]]);