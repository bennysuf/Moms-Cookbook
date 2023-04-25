import Logout from "./Logout";

export default function NavBar() {
  return (
    <nav>
      <ul style={{ marginLeft: "5%" }}>
        <li>
          <strong>Mom's Cookbook</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/add-new">New recipe</a>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}
