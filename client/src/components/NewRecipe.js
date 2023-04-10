import { useState } from "react";

export default function NewRecipe({ recipe, setRecipe }) {
// export default function NewRecipe() {
  const [newTitle, setNewTitle] = useState("");
  const [newDirections, setNewDirections] = useState("");
  const [newIngredients, setNewIngredients] = useState("");

  function handleEdit() {
    //fetch POST
    //.then(update recipe state)
  }


  return (
    <form onSubmit={handleEdit}>
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
      <button type="submit">Add recipe</button>
    </form>
  );
}
