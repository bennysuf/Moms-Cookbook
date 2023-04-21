import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default function NavBar() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavLink style={{ marginRight: "10px" }} to="/home">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/add-new">
        New recipe
      </NavLink>
      <Logout style={{ margin: "center" }}/>
    </div>
  );
}
