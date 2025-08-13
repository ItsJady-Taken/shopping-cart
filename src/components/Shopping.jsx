import "../styles/shopping.css";
import { useState, useEffect } from "react";
function Shopping() {
  const [clothesData, setClothesData] = useState([]);

  useEffect(() => {
    getClothesData(8).then((data) => {
      setClothesData(data);
    });
  }, []);

  return (
    <>
      <section className="shop-container">
        <div className="clothes-container">
          {clothesData.map((clothes) => (
            <ClothesCard
              key={clothes.id}
              image={clothes.image}
              title={clothes.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ClothesCard({ image, title }) {
  return (
    <div className="clothes-card">
      <div className="clothes-card-img">
        <img src={image} alt="clothes" />
      </div>

      <h3>{title}</h3>
    </div>
  );
}

async function getClothesData(count) {
  const clothesCount = [];

  while (clothesCount.length < count) {
    const clothesId = Math.floor(Math.random() * 20) + 1;
    if (!clothesCount.includes(clothesId)) {
      clothesCount.push(clothesId);
    }
  }

  const promises = clothesCount.map((id) =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  );
  const data = await Promise.all(promises);

  return data;
}

export default Shopping;
