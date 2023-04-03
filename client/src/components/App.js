import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NewRecipe from "./NewRecipe";
function App() {
  const [user, setUser] = useState(null);
  // console.log("user in APP", !user);

  const history = useHistory();

  // console.log("from App", user)

  useEffect(() => {
    fetch("/user").then((r) => {
      // console.log("fetch", r.json())
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        // return <Route path="/login"><Login setUser={setUser}/></Route>
        history.push("/login");
      }
    });
  }, []);

  return (
    <>
      {/* <Switch> */}
      <Route path="/login">
        <Login setUser={setUser} />
      </Route>
      <Route path="/signup">
        <Signup setUser={setUser} />
      </Route>
      <Route path="/home">
        <Home user={user} />
        {/* <Home /> */}
      </Route>
      <Route path="new-recipe">{/* <NewRecipe id={user.id} /> */}</Route>
      <Route path="/new">
        <NewRecipe />
      </Route>
      {/* ^ route for development */}
      {/* </Switch> */}
      {/* <div>{!user ? null : <Home user={user} />}</div> */}
    </>
  );
}

export default App;

//TODO: on logout, set user to null, use context

//remove Home? have newcard and recipecard called in App
//? how can we call route in another way
