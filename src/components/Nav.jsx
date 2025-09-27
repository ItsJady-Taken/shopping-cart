import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/nav.css";
import "../styles/sideMenu.css";

import SideMenu from "./sideMenuPage";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [side, setSide] = useState("right"); // State to track side menu position

  const toggleMenu = (e) => {
    e.preventDefault(); // stop page reload
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <img src="../src/assets/logo.png" alt="logo" />
        </div>
        <ul className="nav-list">
          <li>
            <Link className="nav-link" to="./home">
              <i className="fa-solid fa-house fa-sm"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="./shop">
              <i className="fa-solid fa-cart-shopping fa-sm"></i>
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                toggleMenu(e);
                setSide("right");
              }}
            >
              <i className="fa-solid fa-list-check"></i>
              <span>Checkout</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Overlay */}
      {isOpen && <div className="overlay-side-menu" onClick={toggleMenu}></div>}
      {/* Side menu */}
      <div className={`side-menu ${side} ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <SideMenu toggleMenu={toggleMenu} isOpen={isOpen} side={side} />
        )}
      </div>
    </>
  );
}

export default Nav;
