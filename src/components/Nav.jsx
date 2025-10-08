import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/nav.css";
import "../styles/sideMenu.css";

import { useItemsContext } from "../App";
import SideMenu from "./sideMenuPage";

function Nav() {
  const { items } = useItemsContext();
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
              <i class="fa-solid fa-bag-shopping"></i>

              <span>Shop</span>
            </Link>
          </li>
          <li>
            <a
              style={{ position: "relative" }}
              className="nav-link"
              href="#"
              onClick={(e) => {
                toggleMenu(e);
                setSide("right");
              }}
            >
              <i className="fa-solid fa-cart-shopping fa-sm"></i>
              <span>Cart</span>
              {/* Notification badge */}
              {items.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-14px",
                    right: "-18px",
                    background: "black",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px", // ✅ fixed size
                    height: "20px",
                    display: "flex", // ✅ center the text
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {items.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
      {/* Overlay */}
      {isOpen && <div className="overlay-side-menu" onClick={toggleMenu}></div>}
      {/* Side menu */}
      <div className={`side-menu ${side} ${isOpen ? "open" : ""}`}>
        {isOpen && <SideMenu toggleMenu={toggleMenu} />}
      </div>
    </>
  );
}

export default Nav;
