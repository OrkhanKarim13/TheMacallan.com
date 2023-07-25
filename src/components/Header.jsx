import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Import Icons
import {
  FaAngleDown,
  FaMapMarkerAlt,
  FaRegComment,
  FaSistrix,
  FaUser,
  FaWeightHanging,
} from "react-icons/fa";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/product/cartSlice";

// import Images
import logo from "../assets/images/logo_dark.png";
import DropImg from "../assets/images/womanbarel.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = cart.map((item) => item.quantity * item.price);
    let sum = total.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sum);
  }, [cart]);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="header">
      <div className="header_container">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="burgerMenu" onClick={handleMenuToggle}>
          <div className={isMenuOpen ? "line line1 open" : "line line1"}></div>
          <div className={isMenuOpen ? "line line2 open" : "line line2"}></div>
          <div className={isMenuOpen ? "line line3 open" : "line line3"}></div>
        </div>
        {isMenuOpen && (
          <nav className="burgerNavBar">
            <ul className="navList">
              <li className="navItem">
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li className="navItem">WHISKY</li>
              <li className="navItem">
                <NavLink to={"/distillery"}>DISTILLERY</NavLink>
              </li>
              <li className="navItem">
                <NavLink to={"/shop"}>SHOP</NavLink>
              </li>
              <li className="navItem">
                <NavLink to={"/macallan"}>INSIDE THE MACALLAN</NavLink>
              </li>
            </ul>
            <ul className="burgerSocial">
              <li className="headerIcon">
                <NavLink to="/">{<FaSistrix />}</NavLink>
              </li>
              <li className="headerIcon">
                <NavLink to="/MyAccount">{<FaUser />}</NavLink>
              </li>
              <li className="headerIcon">{<FaMapMarkerAlt />}</li>
              <li className="headerIcon shopIcon">
            <FaWeightHanging onClick={() => setIsOpen(!isOpen)} />
            <div className={isOpen ? "shopBase active" : "shopBase"}>
              <ul className="shopList">
                <h3 className="shopContentTitle">MY BAG</h3>
                {cart.map((product) => (
                  <li className="shopItem" key={product.id}>
                    <div className="shopCardImg">
                      <img
                        src={`http://localhost:5000/${product.productImage}`}
                        alt="cartImg"
                      />
                    </div>
                    <div className="shopCardInfo">
                      <h4 className="shopCardTitle">{product.name}</h4>
                      <div className="quantity">
                        <p className="productQuantity">
                          Quantity: {product.quantity}
                        </p>
                        <p className="productPrice">£{product.price}</p>
                      </div>
                      <button
                        className="deleteBtn"
                        onClick={() => {
                          handleRemove(product.id);
                        }}
                      >
                        remove
                      </button>
                      <p></p>
                    </div>
                  </li>
                ))}
                {totalPrice === 0 ? (
                  <p className="noItemText">
                    There are currently no items in your basket.
                  </p>
                ) : (
                  <div className="shoppingCartFooter">
                    <p className="totalPrice">
                      Total
                      <span>£{totalPrice}</span>
                    </p>
                    <div className="productDetail">
                      Your order may be subject to local sales taxes and duties
                      upon arrival in your chosen country. All additional
                      charges are the responsibility of the recipient. The
                      purchase of limited products will be verified prior to
                      dispatch.
                    </div>

                    <Link to="/shoppingbag" className="checkout">
                      checkout
                    </Link>
                    <div className="productDetail">
                      DELIVERY RATES ARE CALCULATED AT CHECKOUT. BY PROCEEDING
                      TO CHECKOUT YOU ARE ACCEPTING OUR PRIVACY POLICY AND TERMS
                      AND CONDITIONS OF SALE.
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </li>
          <li className="headerIcon">{<FaRegComment />}</li>
          <li className="headerIcon langeuge">EN{<FaAngleDown />}</li>


            </ul>
          </nav>
        )}
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
            <li className="navItem">
              WHISKY
              <span className="itemBorder"></span>
              <div className="whiskyMenu">
                <div className="dropContainer">
                  <ul className="dropList">
                    <li className="dropItem">
                      <NavLink to={"/"}>EXPLORE OUR SINGLE MALTS</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>SHERRY OAK</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>DOUBLE CASK</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>TRIPLE CASK MATURED</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>RARE CASK</NavLink>
                    </li>
                  </ul>
                  <ul className="dropList">
                    <li className="dropItem">
                      <NavLink to={"/"}>ESTATE</NavLink>
                    </li>
                    <li className="dropItem">
                      {" "}
                      <NavLink to={"/"}>THE M COLLECTION</NavLink>
                    </li>
                    <li className="dropItem">
                      {" "}
                      <NavLink to={"/"}>THE QUEST COLLECTION</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>FINE AND RARE </NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>LIMITED RELEASES </NavLink>
                    </li>
                  </ul>
                  <ul className="dropList">
                    <li className="dropItem">
                      <NavLink to={"/"}>TRAVEL RETAIL</NavLink>
                    </li>
                    <li className="dropItem">
                      {" "}
                      <NavLink to={"/"}>PAST RELEASES</NavLink>
                    </li>
                    <li className="dropItem">
                      {" "}
                      <NavLink to={"/"}>DISCOVER THE MACALLAN</NavLink>
                    </li>
                  </ul>
                  <div className="dropImg">
                    <NavLink>
                      <div className="spiritImg">
                        <img src={DropImg} alt="DropImg" />
                      </div>
                      <h4 className="spiritTitle">THE SPIRIT OF 1926</h4>
                    </NavLink>
                  </div>
                </div>
              </div>
            </li>
            <li className="navItem">
              <NavLink to={"/distillery"}>DISTILLERY</NavLink>
            </li>
            <li className="navItem">
              <NavLink to={"/shop"}>SHOP</NavLink>
              <span className="itemBorder"></span>
              <div className="whiskyMenu">
                <div className="dropContainer">
                  <ul className="dropList">
                    <li className="dropItem">
                      <NavLink to={"/"}>SHOP ALL</NavLink>
                    </li>
                    <li className="dropItem">
                      <NavLink to={"/"}>LIFESTYLE COLLECTION</NavLink>
                    </li>
                  </ul>
                  <ul className="dropList">
                    <li className="dropItem">
                      <NavLink to={"/"}>
                        THE MACALLAN INTERACTIVE GIFT GUIDE
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="navItem">
              <NavLink to={"/macallan"}>INSIDE THE MACALLAN</NavLink>
            </li>
          </ul>
        </nav>

        <ul className="headerIcons">
          <li className="headerIcon">
            <NavLink to="/">{<FaSistrix />}</NavLink>
          </li>
          <li className="headerIcon">
            <NavLink to="/MyAccount">{<FaUser />}</NavLink>
          </li>
          <li className="headerIcon">{<FaMapMarkerAlt />}</li>
          <li className="headerIcon shopIcon">
            <FaWeightHanging onClick={() => setIsOpen(!isOpen)} />
            <div className={isOpen ? "shopBase active" : "shopBase"}>
              <ul className="shopList">
                <h3 className="shopContentTitle">MY BAG</h3>
                {cart.map((product) => (
                  <li className="shopItem" key={product.id}>
                    <div className="shopCardImg">
                      <img
                        src={`http://localhost:5000/${product.productImage}`}
                        alt="cartImg"
                      />
                    </div>
                    <div className="shopCardInfo">
                      <h4 className="shopCardTitle">{product.name}</h4>
                      <div className="quantity">
                        <p className="productQuantity">
                          Quantity: {product.quantity}
                        </p>
                        <p className="productPrice">£{product.price}</p>
                      </div>
                      <button
                        className="deleteBtn"
                        onClick={() => {
                          handleRemove(product.id);
                        }}
                      >
                        remove
                      </button>
                      <p></p>
                    </div>
                  </li>
                ))}
                {totalPrice === 0 ? (
                  <p className="noItemText">
                    There are currently no items in your basket.
                  </p>
                ) : (
                  <div className="shoppingCartFooter">
                    <p className="totalPrice">
                      Total
                      <span>£{totalPrice}</span>
                    </p>
                    <div className="productDetail">
                      Your order may be subject to local sales taxes and duties
                      upon arrival in your chosen country. All additional
                      charges are the responsibility of the recipient. The
                      purchase of limited products will be verified prior to
                      dispatch.
                    </div>

                    <Link to="/shoppingbag" className="checkout">
                      checkout
                    </Link>
                    <div className="productDetail">
                      DELIVERY RATES ARE CALCULATED AT CHECKOUT. BY PROCEEDING
                      TO CHECKOUT YOU ARE ACCEPTING OUR PRIVACY POLICY AND TERMS
                      AND CONDITIONS OF SALE.
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </li>
          <li className="headerIcon">{<FaRegComment />}</li>
          <li className="headerIcon langeuge">EN{<FaAngleDown />}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
