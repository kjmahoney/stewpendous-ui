const Result = ({ recipe }) => {
  return (
    <>
      <img src={recipe.images.REGULAR.url} />
      <p>{recipe.label}</p>
    </>
  );
};

export default Result;
