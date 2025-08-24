import "../styles/checkoutPage.css";

import { useLocation } from "react-router-dom";
import { useState } from "react";
function CheckoutPage() {
  const location = useLocation();
  const clotheslist = location.state;
  const [checkoutList, setCheckoutList] = useState([clotheslist]);
  console.log(clotheslist[0].title);
  return (
    <>
      <section className="checkout-container">
        <div className="all-items">
          <div className="checkout-item">
            {checkoutList.map((clothes) => (
              <div key={clothes[0].id} className="checkout-item-card">
                <img src={clothes[0].image} alt={clothes[0].title} />
                <h2>Hello{clothes[0].title}</h2>
                <p>{clothes[0].price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sumary-container">
          <h3>Sumary</h3>
        </div>
      </section>
    </>
  );
}

export default CheckoutPage;
