import "../styles/checkoutPage.css";

import { useItemsContext } from "../App";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function CheckoutPage() {
  const { items } = useItemsContext();
  // const location = useLocation();
  // const { clothesList, amount } = location.state;
  const [quantity, setQuantity] = useState(1);
  const [clothes, setClothes] = useState([]);

  const price = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  items.price = price.toFixed(2);
  const tax = (items.price * 0.07).toFixed(2);
  const total = (parseFloat(items.price) + parseFloat(tax)).toFixed(2);
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

  return (
    <>
      <section className="checkout-container">
        <div className="checkout-info">
          <div className="checkout-card">
            {items.length === 0 ? (
              <h3
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  color: "gray",
                  fontStyle: "italic",
                }}
              >
                <i className="fa-solid fa-circle-exclamation"></i> No items have
                been added
              </h3>
            ) : (
              items.map((clothes) => (
                <div key={clothes.id} className="checkout-card-items">
                  <div className="checkout-item">
                    <div
                      className="checkout-item-card"
                      style={{ position: "relative" }}
                    >
                      <img src={clothes.image} alt={clothes.title} />

                      <div className="checkout-item-info">
                        <h4
                          style={{ fontWeight: "bold", marginBottom: "16px" }}
                        >
                          {clothes.title}
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
                              {clothes.quantity}
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
                            ${clothes.price}
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
              ))
            )}
          </div>
          {items.length !== 0 && (
            <div className="sumary-container">
              <h3>Sumary</h3>
              <div className="summary-total-info" style={{ margin: "0" }}>
                <p style={{ fontWeight: "600px" }}>Subtotal</p>
                <p style={{ fontWeight: "600px" }}>${price}</p>
              </div>
              <div className="summary-total-info" style={{ margin: "0" }}>
                <p style={{ fontWeight: "600px" }}>Shipping</p>
                <p style={{ fontWeight: "600px" }}>Free</p>
              </div>
              <div className="summary-total-info" style={{ margin: "0" }}>
                <p style={{ fontWeight: "600px" }}>Tax</p>
                <p style={{ fontWeight: "600px" }}>${tax}</p>
              </div>
              <div
                className="summary-total-info"
                style={{ borderTop: "1px solid gray", padding: "10px 0px" }}
              >
                <h5 style={{ fontWeight: "bold" }}>Total</h5>
                <h5 style={{ fontWeight: "bold" }}>${total}</h5>
              </div>
              <div></div>
            </div>
          )}
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
