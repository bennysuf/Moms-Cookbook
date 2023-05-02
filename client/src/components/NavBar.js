import Logout from "./Logout";

export default function NavBar() {
  return (
    <nav>
      <ul style={{ marginLeft: "3%" }}>
        <li>
          <strong>Mom's Cookbook</strong>
        </li>
      </ul>
      <ul style={{marginRight: "3%"}}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/add-new">New Recipe</a>
        </li>
        <li>
          <a href="/add-category">Add Category</a>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}
