import { useEffect, useState } from "react";
import { getRandomRecipe } from "./api";
import { getRandomCuisine } from "./data/CuisineTypes";

const Result = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialCuisine = getRandomCuisine();
      const response = await getRandomRecipe(
        encodeURIComponent(initialCuisine.name)
      );

      setRecipeData(response);
    };
    fetchData();
  }, []);

  return <p>{recipeData.label}</p>;
};

export default Result;
