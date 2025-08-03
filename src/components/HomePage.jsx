import { Link } from "react-router-dom";

import "../styles/home.css";

function HomePage() {
  return (
    <main className="main-container">
      <div className="home-container">
        <h1 className="home-title">Welcome to our online store</h1>
        <p className="home-description">We have the best clothes for you</p>
        <Link to="/shop" className="home-shop-button">
          Go to Store
        </Link>
      </div>

      <section className="image-homepage">
        <div className="image-homepage-box">
          <img src="../src/assets/clothes.jpg" alt="firt clothes image" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="image-homepage-box-2">
            <img src="../src/assets/clothes2.jpg" alt="second clothes image" />
          </div>

          <div className="image-homepage-box-3">
            <img src="../src/assets/clothes3.jpg" alt="third clothes image" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
