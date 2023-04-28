import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
import NavBar from "./NavBar";

export default function NewCategory() {
  const [newCategory, setNewCategory] = useState("");
  const [errors, setErrors] = useState([]);

  const { setCategories, categories } = useContext(UserContext);
  const history = useHistory();

  function handleAdd(e) {
    e.preventDefault();
    fetch("/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: newCategory }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((category) => {
          console.log(" in fetch category", category);
          setCategories([category, ...categories]);
          history.push("/home");
        });
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  console.log("err", errors);

  return (
    <div>
      <NavBar />
      <form onSubmit={handleAdd}>
        <div className="input">
          <input
            type="text"
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <br />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <h3 className="input">{errors}</h3>
    </div>
  );
}
