import React, { useState } from "react";
import Logout from "./Logout";
import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";

export default function Home({ user }) {
  const [recipe, setRecipe] = useState(user.recipes);

  const recipes = recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec} />);

  function handleAdd() {
    //TODO: take me to new recipe route
  }

  return (
    <>
      <Logout />
      <button onClick={handleAdd}>new recipe</button>
      {/* <NewRecipe/> */}
      <h1>Home </h1>
      <ul>
      {recipes}
      </ul>
    </>
  );
}
