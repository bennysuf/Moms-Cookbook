import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewRecipe({ recipe, setRecipe }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  function handleAdd(e) {
    e.preventDefault();

    const update = {
      title: newTitle,
      directions: newDirections,
      ingredients: newIngredients,
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
    <form onSubmit={handleAdd}>
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
      <button type="submit">Add recipe</button>
      {errors.map((err) => (
        <h3>{err}</h3>
      ))}
    </form>
  );
}
