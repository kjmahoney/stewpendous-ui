export const CuisinesArray = [
  { name: "american" },
  { name: "asian" },
  { name: "british" },
  { name: "caribbean" },
  { name: "central europe" },
  { name: "eastern europe" },
  { name: "chinese" },
  { name: "french" },
  { name: "greek" },
  { name: "indian" },
  { name: "italian" },
  { name: "japanese" },
  { name: "korean" },
  { name: "kosher" },
  { name: "mediterranean" },
  { name: "mexican" },
  { name: "middle eastern" },
  { name: "nordic" },
  { name: "south american" },
  { name: "south east asian" },
];

export const getRandomCuisine = () => {
  const randomIndex = Math.floor(Math.random() * CuisinesArray.length);
  return CuisinesArray[randomIndex];
};
