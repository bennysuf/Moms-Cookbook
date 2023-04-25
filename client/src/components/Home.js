import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { UserContext } from "./App";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const { recipe, setView } = useContext(UserContext);

  const history = useHistory();

  function handleClick(event) {
    setView(event);
    history.push("/recipes");
  }

  const mapped = recipe.map((rec) => {
    const { id, title, categories } = rec;
    return (
      <article key={id}>
        <p>{title}</p>
        {/* <p>{categories[0].meal}</p> //? why does categories only show after reload? */}
        {/* <p>{categories ? categories[0]?.meal : "Loading..."}</p> //TODO: need page to reload / renders categories once and gets loading */}
        <button className="button" onClick={() => handleClick(rec)}>
          View
        </button>
      </article>
    );
  });

  useEffect(() => {
    setRecipes(mapped[0] ? mapped : "Such emptiness");
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
