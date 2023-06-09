import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [cart, setCart] = useCart();
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container mt-8">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container mt-5 mr-5">
        <Cart cart={cart}>
          <Link to="/shipment">Proceed Shipping</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
