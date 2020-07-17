/* eslint-disable import/prefer-default-export */
export const getRandomColor = () => {
  const letters = '0123456789ABCD';
  let color = '#';
  let i = 0;
  for (i; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
};
