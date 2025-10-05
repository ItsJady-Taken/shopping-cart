import "../styles/viewPage.css";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useState } from "react";

import { useItemsContext } from "../App";
import { Button, ButtonGroup } from "react-bootstrap";
import { Rating, Box } from "@mui/material";

function ViewPage() {
  // Send clothes and quantity to shopping cart page
  const { sendItems } = useItemsContext();
  // Get the passed state using useLocation from shopping page
  const location = useLocation();
  const clothes = location.state;
  const [toCart, setToCart] = useState([clothes]);

  //quantity
  const [quantity, setQuantity] = useState(1);
  const onClickMinus = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setToCart((prevCart) => {
        // const index = prevState.indexOf(clothes);
        // if (index !== -1) {
        //   return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
        // }
        // return prevState;
        prevCart.map((item) =>
          item.id === clothes.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      });
    }
  }, [quantity, clothes]);
  const onClickPlus = () => {
    if (quantity > 100) return;
    setQuantity(quantity + 1);
    setToCart((prevCart) => {
      [...prevCart, clothes];
      // const existingItem = prevCart.find((item) => item.id === clothes.id);

      // if (existingItem) {
      //   // Update quantity if already in cart
      //   return prevCart.map((item) =>
      //     item.id === clothes.id
      //       ? { ...item, quantity: item.quantity + 1 }
      //       : item
      //   );
      // } else {
      //   // Add new item if not in cart
      //   return [...prevCart, { ...clothes, quantity: 1 }];
      // }
    });
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
              state={{ clothesList: toCart, amount: quantity }}
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
              onClick={() => sendItems(toCart)}
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
