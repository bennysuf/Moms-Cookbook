import { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "./App";

export default function RecipeEdit() {
  const { recipeId } = useParams();

  const history = useHistory();

  const { recipe, setRecipe } = useContext(UserContext);

  const recipes = recipe.filter((rec) => rec.id == recipeId); //=== doesn't work
  const { title, directions, ingredients, categories } = recipes[0];

  //useStates
  const [newTitle, setNewTitle] = useState(title);
  const [newDirections, setNewDirections] = useState(directions);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newCategory, setNewCategory] = useState(categories[0].meal);
  const [errors, setErrors] = useState([]);

  function handleSub(e) {
    e.preventDefault();
    setErrors([]);
    const newItem = {
      id: parseInt(recipeId),
      title: newTitle,
      directions: newDirections,
      ingredients: newIngredients,
      category: newCategory,
    };

    fetch(`/recipes/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then((r) => {
      if (r.ok) {
        r.json().then((item) => {
          const returns = recipe.map((rec) => {
            return rec.id !== item.id ? rec : item;
          });
          setRecipe(returns);
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

  function onDelete() {
    fetch(`/recipes/${recipeId}`, {
      method: "DELETE",
    })
      .then((r) => {
        r.json();
      }) //?need {} in order to prevent json error
      .then(() => {
        setRecipe(recipe.filter((rec) => rec.id !== parseInt(recipeId)));
        history.push("/home");
      })
      .catch((err) => console.log(err));
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
      <select onChange={(e) => setNewCategory(e.target.value)}>
        <option value={newCategory}>Select meal</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <br />
      <button type="submit">submit</button>
      <button onClick={onDelete}>Delete recipe</button>
      {errors.map((err) => (
        <h3>{err}</h3>
      ))}
    </form>
  );
}
