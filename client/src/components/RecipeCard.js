export default function RecipeCard({ recipe }) {
  // export default function RecipeCard({rec, setRecipe}){
//   console.log("recipes", recipe);
//   const { title, directions, ingredients } = recipe;

  const recipes = recipe.map((rec) => {
    return (
      <li>
        <h3>{rec.title}</h3>
        <p>{rec.directions}</p>
        <p>{rec.ingredients}</p>
        <button onClick={onEdit}>Edit</button>
      </li>
    );
  });

  function onEdit() {
    //take me to nested route
  }

  return (
        
    <div>
         {recipes}
    </div>
    // <ul>
    // </ul>
    // <li>
    //     <h3>{title}</h3>
    //     <p>{directions}</p>
    //     <p>{ingredients}</p>
    //     <button onClick={onEdit}>Edit</button>
    // </li>
  );
}
