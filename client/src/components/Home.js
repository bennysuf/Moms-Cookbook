import React, { useState, useEffect, useContext } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Logout from "./Logout";
import NavBar from "./NavBar";
import { UserContext } from "./App";

export default function Home() {
  const [recipes, setRecipes] = useState([]); //so page renders recipes when going to "/home"

  const { user, recipe, setView } = useContext(UserContext);

  const history = useHistory();

  function handleClick(event) {
    setView(event);
    history.push("/recipes");
    //? how to take user to RecipePage with just single recipe
  }
  // if (!user) {
  // history.push("/login");
  // } //need this here, wont work in App component (will always push to login before user gets updated)

  const mapped = recipe.map((rec) => {
    const { id, title, categories } = rec;
    console.log(categories);
    return (
      <li key={id}>
        <p>{title}</p>
        {/* <p>{categories === [] ? null: categories[0]?.meal}</p> */}
        <p>{categories[0]?.meal}</p>
        <button onClick={() => handleClick(rec)}>View</button>
      </li>
    );
  });

  useEffect(() => {
    setRecipes(mapped);
  }, [recipe]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <ul>{recipes}</ul>
      </div>
    </>
  );
}
