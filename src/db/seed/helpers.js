export const getRandomArrayItem = (array = []) => (
  Object.keys(array)[Math.floor(Math.random() * Object.keys(array).length)]
);

