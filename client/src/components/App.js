import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
// import NewRecipe from "./NewRecipe";
import RecipeCard from "./RecipeCard";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState(null);
  const [recipe, setRecipe] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setRecipe(user.recipes);
        });
      } else {
        history.push("/login");
      }
    });
  }, []);

  // if (!user) { //will go to login first before state loads, need to reload page to get current data
  //   return <Login setUser={setUser} />;
  // } else {
  //   return (
  //     <>
  //       <Logout />
  //       <button>New recipe</button>
  //       <h1>Hello </h1>
  //       {console.log(user.recipes)}
  //       <ul>
  //         {recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec}/>)}
  //        {/* {recipe ? recipe.map((rec) => <RecipeCard key={rec.id} recipe={rec}/>) : null} */}
  //       </ul>
  //     </>
  //   );
  // }

  // }
  return (
    <>
      {!user ? (
        <>
          <Route path="/login">
            <Login setUser={setUser} />
            {console.log("Welcome")}
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/home">
            {/* <Logout /> */}
            <Home recipe={recipe}/>
            {/* <button>New recipe</button>
            <h1>Hello </h1>
            {console.log(recipe)}
            <ul>
              {recipe.map((rec) => (
                <RecipeCard key={rec.id} recipe={rec} />
              ))}
            </ul> */}
          </Route>
        </>
      )}
      {/* //TODO ternary, if user return login with route */}
      {/* <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/home">
          {/* <RecipeCard */}
      {/* <Home user={user} /> */}
      {/* </> </Route> */}
      {/* <Route path="new-recipe"><NewRecipe id={user.id} /></Route> */}
      {/* <Route path="/new"> */}
      {/* <NewRecipe /> */}
      {/* </Route> */}
      {/* ternary if user then login, else Home and co (can then move everything up from home) */}
      {/* ^ route for development */}
      {/* </Switch> */}
      {/* {/* <div>{!user ? null : <Home user={user} />}</div> */}
    </>
  );
}

export default App;

//TODO: on logout, set user to null, use context

//remove Home? have newcard and recipecard called in App
//? how can we call route in another way
//! export error is from react-script old version
