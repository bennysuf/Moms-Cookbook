export default function RecipeCard({ recipe }) {

  const { title, directions, ingredients } = recipe;

  function onEdit() {
    //take me to nested route
  }

  return (
    <li>
        <h3>{title}</h3>
        <p>{directions}</p>
        <p>{ingredients}</p>
        <button onClick={onEdit}>Edit</button>
    </li>
  );
}
