import React, {useState} from "react";
import Logout from "./Logout";
// import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";


export default function Home({ user }) {
    // console.log("Home", user)
    // const [recipe, setRecipe] = useState(user.recipes) //*when page reloads, we lose definition for a moment, breaking code
    // console.log("from home", user.recipes);
//   const { username, recipes } = user; //?use state for recipes? need use state to update 

//   console.log(recipe)

  function handleAdd(){
    //TODO: take me to new recipe route
  }

  //console.log("!user", user === null) //*works, gets true and false 
// if (user !== null) return (
//     // <Home>
//         <RecipeCard key={user.id} recipe={user.recipes}/> //? how to have home and this displayed at the same time? 
//    // {/* </Home>  */}
//        )//can do this in App then have the recipecard component do the work home was doing (Logout..)



    // const recipes = user.recipes.map((rec)=> {if(!rec) return <RecipeCard key={rec.id} rec={rec}/>})

  return (
    <>
      <Logout />
      <button onClick={handleAdd}>new recipe</button>
      {/* <NewRecipe/> */}
      <h1>Home </h1>
     {user !== null ? <RecipeCard key={user.id} recipe={user.recipes}/> : null}
      {/* <ul> */}
        {/* {!recipe ? recipe.map((rec) => <RecipeCard key={rec.id} rec={rec} setRecipe={setRecipe}/>) : console.log("made it here")} */}
      {/* </ul> */}
    </>
  );
}
//? use context? map in recipcard, call component here 
//need to use ternary because if recipes == undefined i get error
//! user returns undefined first, causing error.
//* how to prevent undefined?
//* ^ when reloaded, parent has user === []. causing undefined in child