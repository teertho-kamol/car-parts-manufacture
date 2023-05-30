import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div className="flex items-center">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details" title={name}>
          <p className="products-name">
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span className="orange-color">${price}</span>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div
          onClick={() => handleRemoveProduct(product)}
          className="delete-container"
        >
          <span>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
