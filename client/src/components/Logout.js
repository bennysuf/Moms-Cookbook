import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";

export default function Logout() {
  const { setUser, setRecipe } = useContext(UserContext);

  const history = useHistory();

  function onLogout() {
    console.log("Logged out");
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setRecipe([]);
      setUser(null);
      history.push("/login");
    });
  }

  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}
