import React, {useState} from "react";
import Logout from "./Logout";
import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";


export default function Home({ recipe }) {
    // const [recipe, setRecipe] = useState(user.recipes) //*when page reloads, we lose definition for a moment, breaking code
//   const { username, recipes } = user; //?use state for recipes? need use state to update 


const recipes = recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec}/>)

  function handleAdd(){
    //TODO: take me to new recipe route
  }

  //console.log("!user", user === null) //*works, gets true and false 
       //can do this in App then have the recipecard component do the work home was doing (Logout..)



    // const recipes = user.recipes.map((rec)=> {if(!rec) return <RecipeCard key={rec.id} rec={rec}/>})

  return (
    <>
      <Logout />
      <button onClick={handleAdd}>new recipe</button>
      {/* <NewRecipe/> */}
      <h1>Home </h1>
        {recipes}
     {/* {user !== null ? <RecipeCard key={user.id} recipe={user.recipes}/> : null} */}
    </>
  );
}
//? use context? map in recipcard, call component here 
//need to use ternary because if recipes == undefined i get error
//! user returns undefined first, causing error.
//* how to prevent undefined?
//* ^ when reloaded, parent has user === []. causing undefined in child