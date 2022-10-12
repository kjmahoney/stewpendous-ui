import styles from "./Result.module.scss";

const Result = ({ recipe }) => {
  if (!recipe.label) return null;
  return (
    <div className={styles.root}>
      <a href={recipe.url} className={styles.container}>
        <img
          alt={recipe.label}
          src={recipe.images.REGULAR.url}
          className={styles.img}
        />
        <p className={styles.label}>{recipe.label}</p>
        <p
          className={styles.caption}
        >{`Cuisine Type: ${recipe.cuisineType[0]}`}</p>
      </a>
    </div>
  );
};

export default Result;
