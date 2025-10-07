import "../styles/sideMenu.css";

import { useItemsContext } from "../App";
export default function SideMenu({ toggleMenu }) {
  const { items } = useItemsContext();
  console.log(items);
  return (
    <div>
      {/* Side Menu */}

      <div className="menu-header">
        <h2 style={{ margin: "0px", fontSize: "24px" }}>Shopping Cart</h2>
        <button onClick={toggleMenu} className="close-btn">
          X
        </button>
      </div>
      <ul className="p-4 space-y-4">
        <li>
          {items.length === 0 ? (
            <p className="text-gray-500">No items in the cart</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>${item.price}</span>
                <span>Qty: {item.quantity}</span>
              </div>
            ))
          )}
        </li>
      </ul>
    </div>
  );
}
