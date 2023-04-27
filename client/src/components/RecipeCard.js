import { Link } from "react-router-dom";

export default function RecipeCard({ recipes }) {
  const {difficulty, id, recipe, category} = recipes
  const {title, directions, ingredients} = recipe
  const {meal} = category

  return (
    <div style={{ textAlign: "center" }}>
      <h4>{title}</h4>
      <h5>Meal: {meal}</h5>
      <em>Difficulty: {difficulty}</em>
      <p>Directions: {directions}</p>
      <p>Ingredients: {ingredients}</p>
      <Link to={`/recipes/${id}`}>Edit</Link>
    </div>
  );
}
