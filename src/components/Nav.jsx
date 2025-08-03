import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src="../src/assets/logo.png" alt="logo" />
        </div>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to={"./home"}>
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./shop">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
