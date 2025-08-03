import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="nav-container">
        <h1>Logo</h1>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
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
