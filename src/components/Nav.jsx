import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="nav-container">
        <h1>Logo</h1>
        <ul className="nav-list">
          <li>
            <Link to={"./home"}>Home</Link>
          </li>
          <li>
            <Link to="./shop">Shop</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
