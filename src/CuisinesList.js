import { useState } from "react";
import { getRandomRecipe } from "./api";
import { CuisinesArray } from "./data/CuisineTypes";

const CuisinesList = () => {
  const handleClick = async (e) => {
    const response = await getRandomRecipe(e.target.value);
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
