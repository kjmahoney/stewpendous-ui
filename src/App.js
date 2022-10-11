import { useEffect, useState } from "react";
import CuisinesList from "./CuisinesList";
import Result from "./Result";
import { getRandomRecipe } from "./api";
import { getRandomCuisine } from "./data/CuisineTypes";
import "./App.css";

function App() {
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

  console.log(recipeData);

  return (
    <div className="App">
      <h1>StewPendous!</h1>
      <p>Stewpidly good stew recipes from around the world</p>
      <CuisinesList setRecipeData={setRecipeData} />
      <Result recipe={recipeData} />
    </div>
  );
}

export default App;
