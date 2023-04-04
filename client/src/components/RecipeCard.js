import { Link, } from "react-router-dom";
// import RecipeEdit from "./RecipeEdit";

export default function RecipeCard({ recipe }) {
        const { id, title, directions, ingredients } = recipe;

  return (
    <div>
      <li>
        <h3>{title}</h3>
        <p>{directions}</p>
        <p>{ingredients}</p>
       <Link to={`/home/${id}`}>Edit</Link>
      </li>
    </div>
  );
}
