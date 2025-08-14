import "../styles/shopping.css";

import { Link, Outlet } from "react-router-dom";

import { useState, useEffect } from "react";
import { ClothesCard } from "./PreBuildComp";

function Shopping() {
  const [clothesData, setClothesData] = useState([]);
  useEffect(() => {
    getClothesData().then((data) => {
      setClothesData(data);
    });
  }, []);

  return (
    <>
      <section className="shop-container">
        <div className="clothes-container">
          {clothesData.map((clothes) => (
            <Link
              key={clothes.id}
              style={{ textDecoration: "none" }}
              to={`/product/${clothes.id}`}
            >
              <ClothesCard
                key={clothes.id}
                image={clothes.image}
                title={clothes.title}
                price={clothes.price}
                rates={clothes.rating.rate}
                reviewCount={clothes.rating.count}
              />
            </Link>
          ))}
        </div>
        <Outlet />
      </section>
    </>
  );
}

async function getClothesData() {
  const clothesCount = [1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20];

  // while (clothesCount.length < count) {
  //   const clothesId = Math.floor(Math.random() * 20);
  //   if (!clothesCount.includes(clothesId)) {
  //     clothesCount.push(clothesId);
  //   }
  // }

  const promises = clothesCount.map((id) =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  );
  const data = await Promise.all(promises);
  console.log(data);
  return data;
}

export default Shopping;
