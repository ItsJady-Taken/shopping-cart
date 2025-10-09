import "../styles/sideMenu.css";

import { useItemsContext } from "../App";
export default function SideMenu({ toggleMenu }) {
  const { items } = useItemsContext();
  console.log(items);
  return (
    <div>
      {/* Side Menu */}

      <div className="menu-header">
        <h2
          style={{
            margin: "0px",
            fontSize: "24px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          <i className="fa-solid fa-list-ul"></i> Shopping Cart
        </h2>
        <button onClick={toggleMenu} className="close-btn">
          X
        </button>
      </div>
      <ul className="menu-list">
        <li>
          {items.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                letterSpacing: "1px",
                fontSize: "18px",
              }}
            >
              No items in the cart
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
              </div>
            ))
          )}
        </li>
      </ul>
    </div>
  );
}
