export const getRandomColor = (colors: string[]) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  colors.splice(randomIndex, 1);
  return color;
};
