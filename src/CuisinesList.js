const CuisinesArray = [
  { name: "american" },
  { name: "asian" },
  { name: "british" },
  { name: "eastern european" },
];

const Cuisine = () => {};

const CuisinesList = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
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
