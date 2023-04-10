import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NewRecipe from "./NewRecipe";

function App() {
  const [user, setUser] = useState(null);
  const [recipe, setRecipe] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setRecipe(user.recipes)
        });
      } else {
        history.push("/login");
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/home">
            <Home user={user} setUser={setUser} recipe={recipe} setRecipe={setRecipe}/>
            {/* <Home user={user} setUser={setUser} /> */}
            {/* //TODO use context to move down */}
          </Route>
          <Route path="/add-new">
            <NewRecipe recipe={recipe} setRecipe={setRecipe}/>
          </Route>
        </>
      )}
    </>
  );
}

export default App;

//TODO: work on new recipe

//! export error is from react-script old version

//? edit page doesn't change, only when reloaded 
