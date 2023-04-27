import { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "./App";

export default function RecipeEdit() {
  const { recipeId } = useParams();

  const history = useHistory();

  const { recipes, setRecipes, setView } = useContext(UserContext);

  const filtered = recipes.filter((rec) => rec.id === parseInt(recipeId));
  const { difficulty, category, recipe } = filtered[0];
  const { title, directions, ingredients } = recipe;
  const { meal } = category;

  //useStates
  const [newTitle, setNewTitle] = useState(title);
  const [newDirections, setNewDirections] = useState(directions);
  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newDifficulty, setNewDifficulty] = useState(difficulty);
  const [newCategory, setNewCategory] = useState(meal);
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
      difficulty: newDifficulty,
    };

    fetch(`/recipe_categories/${recipeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then((r) => {
      if (r.ok) {
        r.json().then((item) => {
          const returns = recipes.map((rec) => {
            return rec.id !== item.id ? rec : item;
          });
          setRecipes(returns);
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
    fetch(`/recipe_categories/${recipeId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        setRecipes(recipes.filter((rec) => rec.id !== parseInt(recipeId)));
        history.push("/home");
      })
      .catch((err) => console.log("Error", err));
  }

  return (
    <div>
      <form onSubmit={handleSub}>
        <div
          style={{ textAlign: "center" }}
          onChange={(e) => setNewDifficulty(e.target.value)}
        >
          <p>Difficulty</p>
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="difficulty"
            value="Easy"
            checked={newDifficulty === "Easy" ? "checked" : null}
          />
          Easy
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="difficulty"
            value="Medium"
            checked={newDifficulty === "Medium" ? "checked" : null}
          />
          Medium
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="difficulty"
            value="Hard"
            checked={newDifficulty === "Hard" ? "checked" : null}
          />
          Hard
        </div>
        <br />
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
            checked={newCategory === "Breakfast" ? "checked" : null}
          />
          Breakfast
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Lunch"
            checked={newCategory === "Lunch" ? "checked" : null}
          />
          Lunch
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="meal"
            value="Dinner"
            checked={newCategory === "Dinner" ? "checked" : null}
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
