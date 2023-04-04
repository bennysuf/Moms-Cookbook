import React, { useState } from "react";
import {Route, useRouteMatch, useParams} from "react-router-dom"
import Logout from "./Logout";
// import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";
import RecipeEdit from "./RecipeEdit";
// import RecipeEdit from "./RecipeEdit";

export default function Home({ user }) {
  const [recipe, setRecipe] = useState(user.recipes);

//   const {recipeId} = useParams();
//   const {path } = useRouteMatch();


//   console.log(path)

  const recipes = recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec} />);

  function handleAdd() {
    //TODO: take me to new recipe route
  }


  return (
    <div onClick={() => console.log("clicked")}>
      <Logout />
      <button onClick={handleAdd}>new recipe</button>
      {/* <NewRecipe/> */}
      <h1>Home </h1>
      <ul>
      {/* <RecipeCard recipe={recipe} /> */}
      <Route path={`/home/:recipeId`}>
        <RecipeEdit recipe={recipe}/>
      </Route>
      {recipes}
      </ul>
    </div>
  );
}
