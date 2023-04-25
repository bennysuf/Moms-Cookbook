import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import NavBar from "./NavBar";

export default function NewRecipe() {
  const [newTitle, setNewTitle] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const { recipe, setRecipe } = useContext(UserContext);

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
          setRecipe([...recipe, newItem]);
          history.push("/home");
        });
      } else {
        r.json().then((err) => {
          const arr = [];
          for (const key in err.errors) {
            arr.push(`${key}: ${err.errors[key]}`);
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
        <div
          style={{ textAlign: "center" }}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <p>Meal type</p>
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Breakfast"
          />
          Breakfast
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Lunch"
          />
          Lunch
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Dinner"
          />
          Dinner
        </div>
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
