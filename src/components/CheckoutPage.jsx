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
        <div className="checkout-info">
          <div className="all-items">
            <div className="checkout-item">
              {checkoutList.map((clothes) => (
                <div
                  key={clothes[0].id}
                  className="checkout-item-card"
                  style={{ position: "relative" }}
                >
                  <img src={clothes[0].image} alt={clothes[0].title} />

                  <div>
                    <h4>{clothes[0].title}</h4>
                    <p>{clothes[0].price}</p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    X
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sumary-container">
            <h3>Sumary</h3>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "bold" }}>Subtotal</p>
              <p style={{ fontWeight: "bold" }}>${clotheslist[0].price}</p>
            </div>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "bold" }}>Shipping</p>
              <p style={{ fontWeight: "bold" }}>Free</p>
            </div>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "bold" }}>Tax</p>
              <p style={{ fontWeight: "bold" }}>$0.89</p>
            </div>
            <div
              className="summary-total-info"
              style={{ borderTop: "1px solid gray", padding: "10px 0px" }}
            >
              <h5 style={{ fontWeight: "bolder" }}>Total</h5>
              <h5 style={{ fontWeight: "bolder" }}>${clotheslist[0].price}</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutPage;
