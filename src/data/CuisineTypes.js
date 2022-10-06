export const CuisinesArray = [
  { name: "american" },
  { name: "asian" },
  { name: "british" },
  { name: "caribbean" },
  { name: "eastern europe" },
];

export const getRandomCuisine = () => {
  const randomIndex = Math.floor(Math.random() * CuisinesArray.length);
  return CuisinesArray[randomIndex];
};
