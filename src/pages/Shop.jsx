import { Link } from "react-router-dom";
// import Components
import PrimaryButton from "../components/PrimaryButton";
// import Images
import JoinImg from "../assets/images/Join-TMS-Macallan-bar-1.png";
import Wallpaper from "../assets/images/shop.jpg";
import MacallanCover from "../assets/images/macallan-distil-your-world-new-york-ballot-opening.jpeg";
import ProductGift1 from "../assets/images/03-Note Card.jpg";
import ProductGift2 from "../assets/images/A5 Ruled Notebook cover.jpg";
import ProductGift3 from "../assets/images/A5 Blank Notebook cover.jpg";
import ProductGift4 from "../assets/images/accessories-harmony-collection-notebook_red.jpg";
import ProductGift5 from "../assets/images/MAC-2022-Lifestyle-Accessories-Photography-Candle-EEH_Without_Flame16x9-72dpi.jpg";
import ProductGift6 from "../assets/images/MAC-2022-Lifestyle-Accessories-Photography-Stirrers16x9-72dpi.jpg";
import journeyBg from "../assets/images/MMJ (1).png";

// import Redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/product/cartSlice";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch()

  const handleClick = (product) =>{
    dispatch(addToCart(product))
  }

  return (
    <section className="shop">
      <div className="shopWallpaper">
        <img src={Wallpaper} alt="Wallpaper" />
      </div>
      <div className="shopInfo">
        <span className="italicHead">The Macallan</span>
        <h2 className="contentTitle">SHOP</h2>
        <p className="contentInfo">
          Enjoy complimentary shipping on selected orders and products over
          £150.00
        </p>
        <p className="subject">Subject to T&Cs</p>
      </div>
      <div className="buttonUK">
        <div className="container">
          <button className="changeBtn">DELIVERING TO UNITED KINGDOM</button>
        </div>
      </div>
      <div className="paragraph">
        <p>
          For more information about Brexit, shipping and delivery see our
          detailed <Link href="/">delivery information.</Link>
        </p>
      </div>
      <div className="shopGrid">
        <div className="container">
          <div className="gridHeaderShop">
            <h2 className="shopTitle">WHISKY</h2>
          </div>
          <ul className="productsList">
            {products?.map((product) => {
              return (
                <li className="shopProduct" key={product.id}>
                  <Link to="/singleProduct">
                    <div className="productCard">
                      <div className="productImage">
                        <img
                          src={`http://localhost:5000/${product?.productImage}`}
                          alt="Product2"
                        />
                      </div>
                      <div className="productTitle">
                        <h3 className="productName">{product.name}</h3>
                      </div>
                      <div className="productDetails">
                        <p className="productinfo">
                          ABV : {product.abv} | VOLUME: {product.volume}
                        </p>
                      </div>
                      <div className="productPrice">
                        <p className="productinfo">£{product.price}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn" onClick={()=>handleClick(product)}>ADD TO BAG</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="portfolio">
        <div className="container">
          <div className="portImg">
            <img src={MacallanCover} alt="MacallanCover" />
          </div>
          <div className="portInfo">
            <span className="italicTitle">
              Can't find what you're looking for?
            </span>
            <h2 className="infoTitle">EXPLORE OUR PORTFOLIO</h2>
            <div className="infoText">
              Discover our wider selection of single malts that we have released
              over the years, including limited releases, travel retail
              exclusives and special editions from our archive.
            </div>
            <div className="button">
              <button className="shopBtn">DISCOVER OUR FULL POTFOLIO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="container">
          <div className="experContent">
            <div className="sectionCover">
              <img src={JoinImg} alt="JoinImg" />
            </div>
            <div className="sectionInfo">
              <h2 className="experienceTitle">
                JOIN US FOR A RICHER EXPERIENCE
              </h2>
              <p className="experienceText">
                Join The Macallan Society and be the first to hear exciting
                news, learn about experiences, new product releases and access
                special, behind the scenes content.
              </p>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
      <div className="shopGrid">
        <div className="container">
          <div className="gridHeaderShop">
            <h2 className="shopTitle">GIFT</h2>
          </div>
          <ul className="productsList">
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift1} alt="ProductGift1" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Anecdotes of Ages - Notelets
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£20.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift2} alt="ProductGift2" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Anecdotes of Ages - A5 Ruled Notebook
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£24.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift3} alt="Product3" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Anecdotes of Ages - A5 Blank Notebook
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£24.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift4} alt="ProductGift4" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Harmony Collection Inspired
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£50.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift5} alt="Product5" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Easter Elchies Candle - Spiritual Home
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£75.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
            <li className="shopProduct">
              <Link>
                <div className="productCard">
                  <div className="productImage">
                    <img src={ProductGift6} alt="Product6" />
                  </div>
                  <div className="productTitle">
                    <h3 className="productName">
                      The Macallan Silver Cocktail Stirrers
                    </h3>
                  </div>
                  <div className="productDetails">
                    <p className="productinfo"></p>
                  </div>
                  <div className="productPrice">
                    <p className="productinfo">£250.00</p>
                  </div>
                  <div className="cardButtons">
                    <button className="exploreBtn">EXPLORE</button>
                    <button className="addBtn">ADD TO BAG</button>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="journey">
        <div className="container">
          <div className="journeyContent">
            <div className="sectionCover">
              <img src={journeyBg} alt="journeyBg" />
            </div>
            <div className="sectionInfo">
              <span className="italicHead">Begin</span>
              <h2 className="journeyTitle">MY MACALLAN JOURNEY</h2>
              <p className="journeyText">
                Join us on a shared journey of exploration through an experience
                where we bring you tailored, bespoke recommendations crafted
                uniquely to you.
              </p>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
