import { Outlet } from "react-router-dom";

import "../styles/home.css";

function HomePage() {
  return (
    <main className="main-container">
      <div>
        <button className="home-shop-button">Go to Shop</button>
      </div>

      <section>
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
