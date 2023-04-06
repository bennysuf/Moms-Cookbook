import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function RecipeEdit({ recipe, setRecipe }) {
  const { recipeId } = useParams();
  const history = useHistory();

  const recipes = recipe.filter((rec) => rec.id == recipeId); //=== doesn't work
  const { title, directions, ingredients } = recipes[0];

  const [newTitle, setNewTitle] = useState(title);
  const [newDirections, setNewDirections] = useState(directions);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [errors, setErrors] = useState([]);

  function handleSub(e) {
    e.preventDefault();
    setErrors([]);
    fetch(`/recipes/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: recipeId,
        title: newTitle,
        directions: newDirections,
        ingredients: newIngredients,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((d) => {
          const update = recipe.map((item) => {
            if (item.id === d.id) {
              return {
                id: parseInt(recipeId),
                title: newTitle,
                directions: newDirections,
                ingredients: newIngredients,
              };
            } else {
              return item;
            }
          });
          setRecipe(update);
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
    <form onSubmit={handleSub}>
      <h1>Edit recipe</h1>
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
      <button type="submit">submit</button>
      {errors.map((err) => (
        <h3>{err}</h3>
      ))}
    </form>
  );
}
