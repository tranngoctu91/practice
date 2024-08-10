import React from "react";
import { useGallery } from "./gallerry-context";

const Cart = () => {
  const { cartItems, removeItem } = useGallery();
  return (
    <div style={{ width: "200px" }}>
      <p>{cartItems.length}</p>
      <table>
        {cartItems.some(() => true) &&
          cartItems.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>
                <img src={item.url} style={{ width: "50px" }} alt="" />
              </td>
              <td>
                <button onClick={() => removeItem(item.id)}>delete</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Cart;
