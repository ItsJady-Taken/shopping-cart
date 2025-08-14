import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ClothesCard({ image, title, price }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="secondary">Buy Now</Button>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export { ClothesCard };
