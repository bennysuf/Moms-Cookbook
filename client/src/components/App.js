import React, { useEffect, useState, createContext } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NewRecipe from "./NewRecipe";
import newCategory from "./NewCategory";
import RecipeEdit from "./RecipeEdit";
import "@picocss/pico/css/pico.min.css";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [view, setView] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          fetch("categories")
            .then((r) => r.json())
            .then((d) => setCategories(d));
          setRecipes(user.recipes);
        });
      } else {
        history.push("/login");
      }
    });
  }, []);

  const routes = (
    <Switch>
      <Route path="/home" component={Home} />
      <Route exact path={`/recipes/:recipeId`} component={RecipeEdit} />
      <Route path="/add-new" component={NewRecipe} />
      <Route path="/add-category" component={newCategory} />
      <Route exact path="*">
        <h1 style={{ textAlign: "center" }}>404 Page Not Found</h1>
      </Route>
    </Switch>
  );

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        recipes,
        setRecipes,
        view,
        setView,
        categories,
        setCategories,
      }}
    >
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* not in ternary so if signed in, cant access login */}
      {!user ? <> </> : <>{routes}</>}
      {/* ternary so routes cant even load briefly if not logged in */}
    </UserContext.Provider>
  );
}

export default App;

// TODO: redo state for recipes?
