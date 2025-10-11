import "../styles/checkoutPage.css";

import { useItemsContext } from "../App";
//import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { items } = useItemsContext();
  // const location = useLocation();

  const price = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  items.price = price.toFixed(2);
  const tax = (items.price * 0.07).toFixed(2);
  const total = (parseFloat(items.price) + parseFloat(tax)).toFixed(2);

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
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/product/${clothes.id}`}
                        state={clothes}
                      >
                        <img src={clothes.image} alt={clothes.title} />
                      </Link>
                      <div className="checkout-item-info">
                        <h4
                          style={{ fontWeight: "bold", marginBottom: "16px" }}
                        >
                          {clothes.title}
                        </h4>
                        <div className="checkout-item-quantity">
                          <p
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              margin: "0px",
                              fontWeight: "light",
                            }}
                          >
                            Order: {clothes.quantity}
                          </p>
                          <p
                            style={{
                              fontSize: "18px",
                              letterSpacing: "1px",
                              margin: "0px",
                              fontWeight: "light",
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
              <div>
                <ButtonGroup
                  vertical
                  style={{ width: "100%", gap: "10px" }}
                  size="lg"
                >
                  <Button variant="dark" size="lg">
                    <i className="fa-brands fa-cc-mastercard fa-lg"></i>{" "}
                    <span style={{ fontWeight: "bold" }}>Credit Card</span>
                  </Button>

                  <Button variant="light" size="lg">
                    <i className="fa-brands fa-cc-apple-pay fa-lg"></i>{" "}
                    <span style={{ fontWeight: "bold" }}>Apple Pay</span>
                  </Button>
                  <Button variant="primary" size="lg">
                    <i className="fa-brands fa-cc-paypal fa-lg"></i>{" "}
                    <span style={{ fontWeight: "bold" }}>PayPal</span>
                  </Button>
                </ButtonGroup>
              </div>
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
