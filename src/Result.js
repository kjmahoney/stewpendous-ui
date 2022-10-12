import styles from "./Result.module.scss";

const Result = ({ recipe }) => {
  if (!recipe.label) return null;
  return (
    <div className={styles.root}>
      <a href={recipe.uri} className={styles.container}>
        <img
          alt={recipe.label}
          src={recipe.images.REGULAR.url}
          className={styles.img}
        />
        <p className={styles.label}>{recipe.label}</p>
      </a>
    </div>
  );
};

export default Result;
