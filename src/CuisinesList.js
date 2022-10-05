import { useState } from "react";

const CuisinesArray = [
  { name: "american" },
  { name: "asian" },
  { name: "british" },
  { name: "eastern europe" },
];

const CuisinesList = () => {
  const handleClick = async (e) => {
    const data = { cuisine: e.target.value };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:8000/api/recipes/", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log(json);
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
