import "../styles/checkoutPage.css";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function CheckoutPage() {
  const location = useLocation();
  const { clothesList, amount } = location.state;
  // const [checkoutList, setCheckoutList] = useState([clothesList]);
  console.log(clothesList);
  console.log(amount);
  return (
    <>
      <section className="checkout-container">
        <div className="checkout-info">
          <div className="all-items">
            <div className="checkout-item">
              <div
                key={clothesList.id}
                className="checkout-item-card"
                style={{ position: "relative" }}
              >
                <img src={clothesList[0].image} alt={clothesList[0].title} />

                <div className="checkout-item-info">
                  <h4 style={{ fontWeight: "bold", marginBottom: "16px" }}>
                    {clothesList[0].title}
                  </h4>
                  <div className="checkout-item-quantity">
                    <ButtonGroup
                      aria-label="Basic example"
                      style={{ border: "1px solid gray" }}
                    >
                      <Button
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                        variant="light"
                      >
                        -
                      </Button>
                      <Button
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                        variant="light"
                        disabled
                      >
                        {amount}
                      </Button>
                      <Button
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                        variant="light"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    <p>${clothesList[0].price}</p>
                  </div>
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
              {/* {checkoutList.map((clothes) => (
                <div
                  key={clothes[0].id}
                  className="checkout-item-card"
                  style={{ position: "relative" }}
                >
                  <img src={clothes[0].image} alt={clothes[0].title} />

                  <div className="checkout-item-info">
                    <h4 style={{ fontWeight: "bold", marginBottom: "16px" }}>
                      {clothes[0].title}
                    </h4>
                    <div className="checkout-item-quantity">
                      <ButtonGroup
                        aria-label="Basic example"
                        style={{ border: "1px solid gray" }}
                      >
                        <Button
                          style={{ fontWeight: "bold", fontSize: "18px" }}
                          variant="light"
                        >
                          -
                        </Button>
                        <Button
                          style={{ fontWeight: "bold", fontSize: "18px" }}
                          variant="light"
                          disabled
                        >
                          1
                        </Button>
                        <Button
                          style={{ fontWeight: "bold", fontSize: "18px" }}
                          variant="light"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <p>${clothes[0].price}</p>
                    </div>
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
              ))} */}
            </div>
          </div>
          <div className="sumary-container">
            <h3>Sumary</h3>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "bold" }}>Subtotal</p>
              <p style={{ fontWeight: "bold" }}>${clothesList[0].price}</p>
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
              <h5 style={{ fontWeight: "bolder" }}>${clothesList[0].price}</h5>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

function CustomCheckoutBtn({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Checkout</button>
    </div>
  );
}

export default CheckoutPage;
