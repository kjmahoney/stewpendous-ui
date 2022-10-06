export const getRandomRecipe = async (cuisine) => {
  const data = { cuisine: cuisine };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await fetch("http://localhost:8000/api/recipes/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  const json = await response.json();
  const index = Math.floor(Math.random() * json.to);
  const recipe = json.hits[index];

  return recipe.recipe;
};
