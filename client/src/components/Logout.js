import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();

  function onLogout() {
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
