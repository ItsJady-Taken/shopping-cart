import "../styles/shopping.css";

import { Link, Outlet } from "react-router-dom";

import { useState, useEffect } from "react";
import { ClothesCard, ErrorScreen, LoadingIcon } from "./PreBuildComp";

function useClothesData() {
  const [clothesData, setClothesData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const clothesId = [1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20];
    clothesId.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
        .then((res) => {
          if (!res.ok) {
            return new Error("Network response was not ok");
          } else {
            return res.json();
          }
        })
        .then((data) =>
          setClothesData((pre) => {
            const existing = pre.find((item) => item.id === data.id);
            if (existing) {
              return pre;
            } else {
              return [...pre, data];
            }
          })
        )
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    );
  }, []);

  return { clothesData, error, loading };
}
function Shopping() {
  const { clothesData, error, loading } = useClothesData();

  if (error) {
    return <ErrorScreen />;
  }
  if (loading) {
    return (
      <div>
        {" "}
        <LoadingIcon />{" "}
      </div>
    );
  }
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

export default Shopping;
