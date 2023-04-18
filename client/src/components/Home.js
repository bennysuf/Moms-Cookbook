import React, { useState, useEffect, useContext } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Logout from "./Logout";
import RecipeCard from "./RecipeCard";
import RecipeEdit from "./RecipeEdit";
import { UserContext } from "./App";

export default function Home() {
  const [recipes, setRecipes] = useState([]); //so page renders recipes when going to "/home"

  const { user, recipe } = useContext(UserContext);

  const history = useHistory();

  if (!user) {
    history.push("/login");
  } //need this here, wont work in App component (will always push to login before user gets updated)

  useEffect(() => {
    setRecipes(recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec} />));
  }, [recipe]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Logout />
        <Link to={"/add-new"} style={{ margin: "1%" }}>
          Add Recipe
        </Link>
        <ul>
          <Route exact path={`/home/:recipeId`} component={RecipeEdit} />
          {recipes}
        </ul>
      </div>
    </>
  );
}

//? edit page doesn't change, only when reloaded
