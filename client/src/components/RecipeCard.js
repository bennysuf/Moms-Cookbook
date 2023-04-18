import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const { id, title, directions, ingredients, categories } = recipe;

  return (
    <div>
      <details>
        <summary>{title}</summary>
        <h5>Meal: {categories[0].meal}</h5>
        <p>Directions: {directions}</p>
        <p>Ingredients: {ingredients}</p>
        <Link to={`/home/${id}`}>Edit</Link>
      </details>
    </div>
  );
}
