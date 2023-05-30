import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  // const {product, handleAddToCart} = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product font-sans">
      <img src={img} alt=""></img>
      <div className="product-info">
        <p className="product-name font-mono font-black">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn-cart py-2"
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
