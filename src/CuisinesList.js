import { getRandomRecipe } from "./api";
import { CuisinesArray } from "./data/CuisineTypes";
import styles from "./CuisinesList.module.scss";

const Cuisines = ({ handleClick }) => {
  return CuisinesArray.map((cuisine, index) => {
    return (
      <button
        className={styles.button}
        onClick={(e) => handleClick(e)}
        key={index}
        value={encodeURIComponent(cuisine.name)}
      >
        {cuisine.name}
      </button>
    );
  });
};

const CuisinesList = ({ setRecipeData }) => {
  const handleClick = async (e) => {
    const response = await getRandomRecipe(e.target.value);
    setRecipeData(response);
  };

  return (
    <div className={styles.container}>
      <Cuisines handleClick={handleClick} />
    </div>
  );
};

export default CuisinesList;
