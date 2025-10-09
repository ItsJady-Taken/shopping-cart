import "../styles/viewPage.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { useItemsContext } from "../App";
import { Button, ButtonGroup } from "react-bootstrap";
import { Rating, Box } from "@mui/material";

function ViewPage() {
  // Send clothes and quantity to shopping cart page
  const { items, sendItems } = useItemsContext();

  // Get the passed state using useLocation from shopping page
  const location = useLocation();
  const clothes = location.state;

  const [quantity, setQuantity] = useState(1);
  // Add to cart function
  const handleAddToCart = () => {
    const existingItem = items.find((item) => item.id === clothes.id);
    let updatedCart;
    // Update quantity if already in cart
    if (existingItem) {
      // update quantity if already in cart
      updatedCart = items.map((item) =>
        item.id === clothes.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Add new item if not in cart
      updatedCart = [...items, { ...clothes, quantity }];
    }
    // send to context after updating
    sendItems(updatedCart);
    return updatedCart;
  };

  // const handleremoveFromCart = () => {
  //   setToCart((prevCart) => {
  //     const updatedCart = prevCart
  //       .map((item) =>
  //         item.id === clothes.id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //       .filter((item) => item.quantity > 0); // remove if 0
  //     sendItems(updatedCart);
  //     return updatedCart;
  //   });
  // };

  //quantity

  const onClickMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // handleremoveFromCart();
    }
  };
  const onClickPlus = () => {
    if (quantity > 100) return;
    setQuantity(quantity + 1);
  };

  return (
    <section className="view-container">
      <div className="view-product">
        <div className="view-product-info">
          {/* //title */}
          <h3>{clothes.title}</h3>
          {/* //description */}
          <p className="view-desc">{clothes.description}</p>
          {/* //rating */}
          <Box
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
            sx={{ "& > legend": { mt: 2 } }}
          >
            <Rating name="read-only" value={clothes.rating.rate} readOnly />{" "}
            <p style={{ fontWeight: "bold", margin: "0px" }}>
              {clothes.rating.rate}
            </p>
            <p style={{ fontWeight: "light", margin: "0px" }}>
              ({clothes.rating.count})
            </p>
          </Box>
          {/* //price */}
          <p style={{ fontWeight: "bold", fontSize: "28px", margin: "0px" }}>
            ${clothes.price}
          </p>
          {/* //quantity */}
          <QuantityButton
            quantity={quantity}
            onClickMinus={onClickMinus}
            onClickPlus={onClickPlus}
          />
          {/* //buy / add to card */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Link
              style={{ width: "100%" }}
              to={`/checkout`}
              // state={{ clothesList: items, amount: quantity }}
              onClick={() => handleAddToCart()}
            >
              <Button
                style={{
                  width: "100%",
                  fontWeight: "bold",
                  border: "1px solid black",
                }}
                variant="light"
              >
                Buy Now
              </Button>
            </Link>

            <Button
              style={{
                width: "100%",
                fontWeight: "bold",
                border: "1px solid black",
              }}
              variant="dark"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="view-product-image">
          <img src={clothes.image} alt={clothes.title} />
        </div>
      </div>
    </section>
  );
}

function QuantityButton({ quantity, onClickMinus, onClickPlus }) {
  return (
    <div>
      <p style={{ fontWeight: "bold", margin: "0px" }}>Quantity:</p>
      <ButtonGroup
        aria-label="Basic example"
        style={{
          border: "1px solid gray",
        }}
      >
        <Button
          style={{ fontWeight: "bold", fontSize: "18px" }}
          onClick={onClickMinus}
          variant="light"
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
          onClick={onClickPlus}
          variant="light"
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ViewPage;
