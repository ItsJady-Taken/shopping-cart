import { useLocation } from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const clothes = location.state;
  console.log(clothes);
  return (
    <>
      <h1>{clothes[0].title}</h1>
    </>
  );
}

export default CheckoutPage;
