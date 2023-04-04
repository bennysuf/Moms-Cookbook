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

  const history = useHistory();

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
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
            <Home user={user}/>
          </Route>
        </>
      )}
    </>
  );
}

export default App;

//TODO: on logout, set user to null, use context

//! export error is from react-script old version
