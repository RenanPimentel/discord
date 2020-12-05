const rand = (min='a', max='b') => Math.floor(Math.random() * (max - min) + min);

const randColor = () => {
  const posibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
  let result = '#';

  for (let i = 0; i < 6; i++) {
      const randomNumber = rand(0, posibles.length);
      result += String(posibles[randomNumber]);
  }

  return result;
}

module.exports = { rand, randColor };