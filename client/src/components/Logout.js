import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();

  function onLogout() {
    console.log("Logged out")
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => history.push("/login"))
  }

  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}
