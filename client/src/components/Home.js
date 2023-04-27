import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { UserContext } from "./App";

export default function Home() {
  const [recipe, setRecipe] = useState([]);

  const { recipes, setView } = useContext(UserContext);

  const history = useHistory();

  function handleClick(event) {
    setView(event);
    history.push("/recipes");
  }

  const mapped = recipes.map((rec) => {
    const { id, title } = rec.recipe;
    const { meal } = rec.category;
    return (
      <article key={id}>
        <p>{title}</p>
        <p>{meal}</p>
        <button className="button" onClick={() => handleClick(rec)}>
          View
        </button>
      </article>
    );
  });

  useEffect(() => {
    setRecipe(mapped[0] ? mapped : "Such emptiness");
  }, [recipes]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <ul>{recipe}</ul>
      </div>
    </>
  );
}
