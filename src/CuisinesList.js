import { useState } from "react";
import { getRandomRecipe } from "./api";

const CuisinesArray = [
  { name: "american" },
  { name: "asian" },
  { name: "british" },
  { name: "eastern europe" },
];

const CuisinesList = () => {
  const handleClick = async (e) => {
    const response = await getRandomRecipe(e.target.value);
    console.log(response);
  };

  return CuisinesArray.map((cuisine, index) => {
    return (
      <button
        onClick={(e) => handleClick(e)}
        key={index}
        value={encodeURIComponent(cuisine.name)}
      >
        {cuisine.name}
      </button>
    );
  });
};

export default CuisinesList;
