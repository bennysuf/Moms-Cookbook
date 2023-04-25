import { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "./App";

export default function RecipeEdit() {
  const { recipeId } = useParams();

  const history = useHistory();

  const { recipe, setRecipe, setView } = useContext(UserContext);

  const recipes = recipe.filter((rec) => rec.id === parseInt(recipeId));
  const { title, directions, ingredients, categories } = recipes[0];

  //useStates
  const [newTitle, setNewTitle] = useState(title);
  const [newDirections, setNewDirections] = useState(directions);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newCategory, setNewCategory] = useState(categories);
  const [errors, setErrors] = useState([]);

  const meals = newCategory[0]?.meal;

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
          setView(item);
          history.push("/recipes");
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
      .then((r) => r.json())
      .then(() => {
        setRecipe(recipe.filter((rec) => rec.id !== parseInt(recipeId)));
        history.push("/home");
      })
      .catch((err) => console.log("Error", err));
  }

  return (
    <div>
      <form onSubmit={handleSub}>
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
            checked={meals === "Breakfast" ? "checked" : null}
          />
          Breakfast
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Lunch"
            checked={meals === "Lunch" ? "checked" : null}
          />
          Lunch
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Dinner"
            checked={meals === "Dinner" ? "checked" : null}
          />
          Dinner
          <br />
        </div>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
        <br />
      </form>
      <button className="button" type="button" onClick={onDelete}>
        Delete recipe
      </button>
      <div className="input">
        {errors.map((err) => (
          <h3>{err}</h3>
        ))}
      </div>
    </div>
  );
}
