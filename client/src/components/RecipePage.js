import React, { useContext } from "react";
import { Route } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import RecipeEdit from "./RecipeEdit";
import NavBar from "./NavBar";
import { UserContext } from "./App";

export default function RecipePage() {
  const { view } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Route exact path={`/recipes/:recipeId`} component={RecipeEdit} />
      <RecipeCard key={view.id} recipes={view} />
    </>
  );
}
