import "../styles/shopping.css";

import { useState, useEffect } from "react";
import { ClothesCard } from "./BootstrapComp";

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
              price={clothes.price}
            />
          ))}
        </div>
      </section>
    </>
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
  console.log(data);
  return data;
}

export default Shopping;
