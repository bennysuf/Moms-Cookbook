import React, { useEffect, useState, createContext } from "react";
import { Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NewRecipe from "./NewRecipe";

export const UserContext = createContext(null);

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

  return (
    <UserContext.Provider value={{ user, setUser, recipe, setRecipe }}>
      {!user ? (
        <>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </>
      ) : (
        <>
          <Route path="/home" component={Home} />
          <Route path="/add-new" component={NewRecipe} />
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;
//! export error is from react-script old version

//? edit page doesn't change, only when reloaded
