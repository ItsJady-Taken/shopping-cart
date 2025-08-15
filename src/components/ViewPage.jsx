import "../styles/viewPage.css";
import { useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Rating, Box } from "@mui/material";

function ViewPage() {
  const location = useLocation();
  const clothes = location.state;
  return (
    <section className="view-container">
      <div className="view-product">
        <div className="view-product-info">
          <h3>{clothes.title}</h3>
          <p className="view-desc">{clothes.description}</p>
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
          <p style={{ fontWeight: "bold", fontSize: "28px" }}>
            ${clothes.price}
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              style={{ fontWeight: "bold", border: "1px solid black" }}
              variant="light"
            >
              Buy Now
            </Button>
            <Button
              style={{ fontWeight: "bold", border: "1px solid black" }}
              variant="dark"
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="view-product-image">
          <img src={clothes.image} alt={clothes.title} />
        </div>
      </div>

      <div className="view-product">
        <div className="view-product-info">
          <h3>{clothes.title}</h3>
          <p>{clothes.price}</p>
          <p>{clothes.rating.rate}</p>
          <p>{clothes.rating.count}</p>
        </div>

        <div className="view-product-image">
          <img src={clothes.image} alt={clothes.title} />
        </div>
      </div>
    </section>
  );
}

export default ViewPage;
