//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating, Box } from "@mui/material";

function ClothesCard({ image, title, price, rates, reviewCount }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
          sx={{ "& > legend": { mt: 2 } }}
        >
          <Rating name="read-only" value={rates} readOnly />
          <Card.Text style={{ fontWeight: "bold", margin: "0px" }}>
            {rates}
          </Card.Text>
          <Card.Text>({reviewCount})</Card.Text>
        </Box>

        <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>
          ${price}
        </Card.Text>
        {/* 
        <div className="card-button-container">
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
        </div> */}
      </Card.Body>
    </Card>
  );
}

function LoadingIcon() {
  return (
    <div
      style={{
        fontSize: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <i className="fa-solid fa-spinner fa-spin"></i>
    </div>
  );
}

function ErrorScreen() {
  return (
    <div
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        wordSpacing: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <p>Network Error</p>
    </div>
  );
}

export { ClothesCard, LoadingIcon, ErrorScreen };
