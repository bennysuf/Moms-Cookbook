import React, { useEffect } from "react";
import { Route, Switch, useHistory, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
function App() {
  useEffect(() => {
    // fetch("/users")
    // .then(r => r.json())
    // .then(d => console.log(d))
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Home />
    </>
  );
}

export default App;
