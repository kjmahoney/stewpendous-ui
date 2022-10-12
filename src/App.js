import { useEffect, useState } from "react";
import CuisinesList from "./CuisinesList";
import Result from "./Result";
import { getRandomRecipe, mockGetRandomRecipe } from "./api";
import { getRandomCuisine } from "./data/CuisineTypes";
import styles from "./App.module.scss";

function App() {
  const [recipeData, setRecipeData] = useState([]);

  const fetchData = async () => {
    const initialCuisine = getRandomCuisine();
    const response = await getRandomRecipe(
      encodeURIComponent(initialCuisine.name)
    );
    setRecipeData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.header}>StewPendous!</h1>
      <p className={styles.caption}>
        Stewpidly good stew recipes from around the world
      </p>
      <CuisinesList setRecipeData={setRecipeData} />
      <Result recipe={recipeData} />
    </div>
  );
}

export default App;
