import React, { useEffect, useState, createContext } from "react";
import { Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NewRecipe from "./NewRecipe";
import RecipePage from "./RecipePage";
import "@picocss/pico/css/pico.min.css";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [view, setView] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
        setUser(user);
        fetch("/recipe_categories").then((r) => r.json().then((d) => setRecipes(d)))
          // setRecipe(user.recipes);
        });
      } else {
        history.push("/login");
      }
    });
  }, []);

  // console.log("App", recipe)

  return (
    <UserContext.Provider
      value={{ user, setUser, recipes, setRecipes, view, setView }}
    >
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* not in ternary so if signed in, cant access login */}
      {!user ? (
        <> </>
      ) : (
        <>
          <Route path="/home" component={Home} />
          <Route path="/recipes" component={RecipePage} />
          <Route path="/add-new" component={NewRecipe} />
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;

// TODO: validate category (custom validation)

// TODO: add array to category then map in backend to create new category

// TODO: redo state for recipes?