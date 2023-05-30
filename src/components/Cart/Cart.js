import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4 className="text-2xl font-medium text-center">Order Summary</h4>
      <div className=" flex justify-between border-b-2 border-b-slate-300 pt-4">
        <span className="font-medium">Selected Items:</span>
        <span className="font-bold">{quantity}</span>
      </div>
      <hr />
      <div className=" flex justify-between border-b-2 border-b-slate-300 pt-4">
        <span className="font-medium">Total price:</span>
        <span className="font-bold">${total}</span>
      </div>
      <hr />
      <div className=" flex justify-between border-b-2 border-b-slate-300 pt-4">
        <span className="font-medium">Total Shipping:</span>
        <span className="font-bold">${shipping}</span>
      </div>
      <hr />
      <div className=" flex justify-between border-b-2 border-b-slate-300 pt-4">
        <span className="font-medium">Tax:</span>
        <span className="font-bold">${tax}</span>
      </div>
      <hr />
      <div className=" flex justify-between border-b-2 border-b-slate-300 pt-4">
        <span className="font-bold text-xl">Grand Total:</span>
        <span className="font-extrabold text-xl">${grandTotal.toFixed(2)}</span>
      </div>
      <button className="bg-cyan-500 px-2 py-1 text-white rounded w-full mt-5">
        {props.children}
      </button>
    </div>
  );
};

export default Cart;
