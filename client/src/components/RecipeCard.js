import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const { id, title, directions, ingredients, categories } = recipe;

  return (
    <div style={{ textAlign: "center" }}>
      <h4>{title}</h4>
      <h5>Meal: {categories ? categories[0]?.meal : "Loading..."}</h5>
      <p>Directions: {directions}</p>
      <p>Ingredients: {ingredients}</p>
      <Link to={`/recipes/${id}`}>Edit</Link>
    </div>
  );
}
