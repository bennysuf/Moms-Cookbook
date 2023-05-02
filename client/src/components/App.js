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
  const [userCategories, setUserCategories] = useState(["No recipes"]);
  const [view, setView] = useState("");

  const history = useHistory();

  function uniqueCategories(arr) {
    let chars = [];
    if (arr[0].category) {
      arr.forEach((e) => chars.push(e.category));
    } else {
      arr.forEach((e) => chars.push(e));
    }
    let uniqueChars = chars.filter((c, index) => {
      return chars.indexOf(c) === index;
    });
    setUserCategories(uniqueChars);
  }

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          fetch("categories")
            .then((r) => r.json())
            .then((d) => setCategories(d));
          if (user.categories[0] !== undefined) {
            uniqueCategories(user.categories);
          }
          setRecipes(user.recipes);
        });
      } else {
        history.push("/login");
      }
    });
  }, []);

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
        userCategories,
        setUserCategories,
        uniqueCategories,
      }}
    >
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* not in ternary so if signed in, cant access login */}
      {!user ? (
        <> </>
      ) : (
        <>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path={`/recipes/:recipeId`} component={RecipeEdit} />
            <Route path="/add-new" component={NewRecipe} />
            <Route path="/add-category" component={newCategory} />
            <Route exact path="*">
              <h1 style={{ textAlign: "center" }}>404 Page Not Found</h1>
            </Route>
          </Switch>
        </>
      )}
      {/* ternary so routes cant even load briefly if not logged in */}
    </UserContext.Provider>
  );
}

export default App;
