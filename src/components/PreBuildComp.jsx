import Button from "react-bootstrap/Button";
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

export { ClothesCard };
