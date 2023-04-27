import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";

export default function Logout() {
  const { setUser, setRecipes } = useContext(UserContext);

  const history = useHistory();

  function onLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setRecipes([]);
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
