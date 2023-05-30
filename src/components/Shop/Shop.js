import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `products.JSON?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://enigmatic-spire-27574.herokuapp.com/productcount")
      .then((res) => res.json())
      .then((data) => {
        const pages = Math.ceil(data / 10);
        setPageCount(pages);
      });
  }, [size]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="my-16 mx-auto">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={`${
                page === number ? "bg-orange-200" : ""
              }bg-white border-2 border-orange-200 mr-3 px-2 focus:bg-orange-200 rounded-md`}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            className="border-2 border-orange-200 rounded-md"
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">Review Orders</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
