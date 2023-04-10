import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Logout from "./Logout";
// import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";
import RecipeEdit from "./RecipeEdit";

export default function Home({ user, setUser, setRecipe, recipe }) {
// export default function Home({ user, setUser }) {
  const history = useHistory();

  if (!user) {
    history.push("/login");
  } //need this here, wont work in App component (will always push to login before user gets updated)

//   const [recipe, setRecipe] = useState(user.recipes);

  const recipes = recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec} />);

  function handleAdd() {
    //TODO: take me to new recipe route
  }

  return (
    <>
      {/* <Route exact path="/add-new">
        <NewRecipe recipe={recipe} setRecipe={setRecipe} />
      </Route>  */}
      {/* <Route path="home"> */}
        <div>
          {/* //   <div onClick={() => history.push("/home")}> */}
          <Logout setUser={setUser}/>
          {/* <button onClick={handleAdd}>new recipe</button> */}
          <Link to={"/add-new"}>Add Recipe</Link>
          <h1>Home </h1>
          <ul>
            <Route exact path={`/home/:recipeId`}>
              <RecipeEdit recipe={recipe} setRecipe={setRecipe} />
            </Route>
            {recipes}
          </ul>
        </div>
      {/* </Route> */}
    </>
  );
}
