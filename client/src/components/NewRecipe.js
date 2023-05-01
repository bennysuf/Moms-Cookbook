import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import NavBar from "./NavBar";

export default function NewRecipe() {
  const [newTitle, setNewTitle] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newCategory, setNewCategory] = useState("Select Category");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const { recipes, setRecipes, categories, setUserCategories, userCategories } =
    useContext(UserContext);

  function handleAdd(e) {
    e.preventDefault();
    const update = {
      title: newTitle,
      directions: newDirections,
      ingredients: newIngredients,
      category: newCategory,
    };
    fetch("/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newItem) => {
          if (userCategories[0] === "No recipes") {
            // if theres no category
            setUserCategories([newCategory]);
          } else if (userCategories.filter((cat) => cat !== newCategory)[0]) {
            // checks if category already exists
            setUserCategories([...userCategories, newCategory]);
          }
          setRecipes([...recipes, newItem]);
          history.push("/home");
        });
      } else {
        r.json().then((err) => {
          const arr = [];
          if (err.error) {
            arr.push(`${err.error}`);
          } else {
            for (const key in err.errors) {
              arr.push(`${key}: ${err.errors[key]}`);
            }
          }
          setErrors(arr);
        });
      }
    });
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleAdd}>
        <div className="input">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Directions"
            value={newDirections}
            onChange={(e) => setNewDirections(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Ingredients"
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
          />
          <br />
        </div>
        <details className="input" role="list">
          <summary role="button" aria-haspopup="listbox">
            {newCategory}
          </summary>
          <ul role="listbox">
            {categories.map((cat) => (
              <li key={cat.id} onClick={() => setNewCategory(cat.category)}>
                {cat.category}
              </li>
            ))}
          </ul>
        </details>
        <br />
        <button className="button" type="submit">
          Add recipe
        </button>
        <div className="input" style={{ marginTop: "3%" }}>
          {errors.map((err) => (
            <h3 key={err}>{err}</h3>
          ))}
        </div>
      </form>
    </div>
  );
}
