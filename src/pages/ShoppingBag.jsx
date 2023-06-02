import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../redux/product/cartSlice";
import { removeProduct } from "../redux/product/cartSlice";
// Import Icons
import { FaLongArrowAltLeft } from "react-icons/fa";

const ShoppingBag = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = cart.map((item) => item.quantity * item.price);
    let sum = total.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sum);
  }, [cart]);

  const handleIncrement = (id) => {
    dispatch(incrementProduct(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementProduct(id));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };


  return (
    <section className="shoppingBag">
      <div className="container">
        <div className="backToShop">
          <Link to={"/shop"}>
            <button className="shopBtn">
              <span>{<FaLongArrowAltLeft />}</span>
              Continue Shopping
            </button>
          </Link>
        </div>
        <div className="shoppingTitle">
          <h1 className="mainTitle">Shopping Bag</h1>
          {totalPrice===0 && <strong>There are currently no items in your cart.</strong>}
          <div className={totalPrice===0 ? "shoppingCart hide" : "shoppingCart"}>
            <ul className="shoppingCartPage">
              {cart.map((product) => {
                return (
                  <li className="shoppingCartItem" key={product.id}>
                    <div className="cartImage">
                      <img
                        src={`http://localhost:5000/${product.productImage}`}
                        alt="Cartimg"
                      />
                    </div>
                    <div className="cartTitle">{product.name}</div>
                    <div className="cartDetails">
                      <div className="itemActions">
                        <button className="removeBtn" onClick={() => {
                          handleRemove(product.id);
                        }}>Remove</button>
                        <div className="itemQuantity">
                          <button
                            onClick={() => {
                              handleDecrement(product.id);
                            }}
                          >
                            -
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            onClick={() => {
                              handleIncrement(product.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="itemPrice">
                        <strong>£{product.price}</strong>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="subtotal">
              <p>
                <span>Subtotal:</span>
                <strong>£{totalPrice}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingBag;
