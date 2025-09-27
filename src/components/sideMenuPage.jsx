import "../styles/sideMenu.css";

export default function SideMenu({ toggleMenu }) {
  return (
    <div>
      {/* Side Menu */}

      <div className="menu-header">
        <h2>Your Cart</h2>
        <button onClick={toggleMenu} className="close-btn">
          X
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
}
