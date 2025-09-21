import "../styles/checkoutPage.css";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function CheckoutPage() {
  const location = useLocation();
  const { clothesList, amount } = location.state;
  const [quantity, setQuantity] = useState(amount);
  const [clothes, setClothes] = useState([clothesList[0]]);
  const onClickMinus = () => {
    //quantity reducer
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onClickPlus = () => {
    // quantity increment
    if (quantity > 100) {
      return;
    }
    setQuantity((prev) => prev + 1);
    setClothes((prevState) => {
      const index = prevState.indexOf(clothes);
      if (index !== -1) {
        return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
      }
      return prevState;
    });
  };

  console.log(clothes);

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
                        onClick={onClickMinus}
                      >
                        -
                      </Button>
                      <Button
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                        variant="light"
                        disabled
                      >
                        {quantity}
                      </Button>
                      <Button
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                        variant="light"
                        onClick={onClickPlus}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    <p
                      style={{
                        fontSize: "20px",
                        letterSpacing: "1px",
                        margin: "0px",
                      }}
                    >
                      ${clothesList[0].price}
                    </p>
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
            </div>
          </div>
          <div className="sumary-container">
            <h3>Sumary</h3>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "600px" }}>Subtotal</p>
              <p style={{ fontWeight: "600px" }}>${clothesList[0].price}</p>
            </div>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "600px" }}>Shipping</p>
              <p style={{ fontWeight: "600px" }}>Free</p>
            </div>
            <div className="summary-total-info" style={{ margin: "0" }}>
              <p style={{ fontWeight: "600px" }}>Tax</p>
              <p style={{ fontWeight: "600px" }}>$0.89</p>
            </div>
            <div
              className="summary-total-info"
              style={{ borderTop: "1px solid gray", padding: "10px 0px" }}
            >
              <h5 style={{ fontWeight: "bold" }}>Total</h5>
              <h5 style={{ fontWeight: "bold" }}>${clothesList[0].price}</h5>
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
