// Import Components
import PrimaryButton from "../components/PrimaryButton";
import ShopAccordion from "../components/ShopAccordion";

// Import Images
import slider2Img1 from "../assets/images/macallan-A-Night-On-Earth-In-Scotland (1).jpg";
import slider2Img2 from "../assets/images/sliderProduct2.jpg";
import slider2Img3 from "../assets/images/mac-2020-classic-cut-mood-photo-le5000-300dpi-1.jpg";
import slider2Img5 from "../assets/images/MAC-2120-Classic-Cut-Mood-Photo-LE5000-300dpi-5-1348x900.webp";
import slider2Img4 from "../assets/images/e8e0b9ea0387d8617a522cbebc2db262.jpg";
import slideProduct1 from "../assets/images/shopproduct (10).png";
import slideProduct2 from "../assets/images/sliderProduct2.jpg";
import slideProduct3 from "../assets/images/slideProduct3.jpg";
import slideProduct5 from "../assets/images/singleProduct6jpg.jpg";
import whiskyOrange from "../assets/images/Whisky_neat_in_glass_festive copy.jpg";
import MacallanGift from "../assets/images/ANOE (1)_1.jpg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
// Import Icons
import { FaMapMarker } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getsingleProduct();
  },);

  const getsingleProduct = async () => {
    try {
      await axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <section className="singleProduct">
      <div className="container">
        <div className="row">
          <div className="slider">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={slideProduct1} alt="SlideProduct1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slideProduct2} alt="slideProduct2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slideProduct5} alt="slideProduct3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slideProduct3} alt="slideProduct4" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="productDetails">
            <p className="detailsHead">{data?.details}</p>
            <h1 className="detailsTitle">{data?.name}</h1>
            <div className="details">
              <p className="productInfo">For special moments worth sharing.</p>
            </div>
            <div className="buttons">
              <p className="shopPrice">
                <span className="price">£{data?.price}</span>
                <span>PRICE INCLUDES UK VAT AND DUTY</span>
              </p>
              <button className="addBtn">ADD TO BAG</button>
            </div>
            <div className="location">
              <label>WE ARE DELIVERING TO:</label>
              <button className="localBtn">
                <div className="labelarea">
                  <div className="btnIcons">
                    <span>{<FaMapMarker />}</span>
                  </div>
                  <span>UNITED KINGDOM</span>
                </div>
              </button>
              <p className="deliveryInfo">
                ESTIMATED DELIVERY: FOR UK - UP TO 5 BUSINESS DAYS. FOR EU - UP
                TO 10 BUSINESS DAYS.*
              </p>
            </div>
            <div className="accardions">
              <ShopAccordion />
            </div>
          </div>
        </div>
        <div className="celebration">
          <div className="context">
            <h3 className="infoTitle">COMING TOGETHER IN CELEBRATION</h3>
            <p className="celebrationInfo">
              Telling the story of Scotland’s world-famous Hogmanay festivities
              celebrated annually on 31st December, A Night on Earth in Scotland
              captures the universal joy of celebrating the change of year.
            </p>
            <p className="celebrationInfo">
              This seasonal release is a collaboration with acclaimed
              Japanese-French illustrator Erica Dorn, whose artwork has featured
              in director Wes Anderson’s films.
            </p>
            <p className="celebrationInfo">
              The single malt is presented in unique packaging to provide a
              special unboxing experience and Dorn’s playful abstract
              illustrations are inspired by the historic fire rituals dominant
              in New Year celebrations around the world.
            </p>
          </div>
        </div>
        <div className="tradition">
          <div className="container">
            <div className="traditionCover">
              <div className="coverInfo">
                <h3 className="contentTitle">HOGMANAY TRADITION</h3>
                <p className="traditionInfo">
                  Hogmanay, pronounced “hog·muh·nei”, is Scotland’s renowned New
                  Year’s Eve festivities. Erica Dorn’s bespoke designs reveal
                  some of the distinctive customs of Scotland’s Hogmanay,
                  including the act of ‘first footing’ when it is good luck for
                  a dark-haired visitor to be the first person to cross the
                  threshold of your home after the stroke of midnight.
                </p>
                <p className="traditionInfo">
                  According to tradition, the ‘first footer’ will carry three
                  things: shortbread, whisky and coal for the fire. Each gift is
                  designed to bring comfort and happiness to your home for the
                  rest of the year. Shortbread is also a prominent flavour in
                  the whisky.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider2">
          <Swiper
            slidesPerView={"3"}
            freeMode={true}
            spaceBetween={50}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider2Img1} alt="slider2Img1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2Img2} alt="slideProduct2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2Img3} alt="slider2Img3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2Img4} alt="slider2Img4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2Img5} alt="slider2Img5" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flavours">
          <div className="context">
            <h3 className="infoTitle">FESTIVE FLAVOURS</h3>
            <p className="flavoursInfo">
              A Night on Earth in Scotland is created from a selection of The
              Macallan’s exceptional American and European oak sherry seasoned
              casks, along with American ex-bourbon barrels to deliver its rich,
              sweet shortbread-like character. A whisky referencing the rich
              Scottish delicacy traditionally gifted and eaten at Hogmanay,
              punctuated by festive notes of dried orange and spice.
            </p>
            <p className="flavoursInfo">
              A Perfect Pairing: Sip neat with shortbread on the side.
            </p>
          </div>
        </div>
        <div className="gallery">
          <div className="container">
            <div className="explore">
              <div className="leftImg">
                <img src={whiskyOrange} alt="whiskyOrange" />
              </div>
              <div className="imgInfo">
                <span className="italicTitle">Discover</span>
                <h2 className="leftTitle">THE MACALLAN LALIQUE TUMBLER</h2>
                <PrimaryButton />
              </div>
            </div>
            <div className="join">
              <div className="rightImg">
                <img src={MacallanGift} alt="MacallanGift" />
              </div>
              <div className="imgInfo">
                <span className="joinTitle">Discover</span>
                <h2 className="rightTitle">THE MACALLAN GIFT GUIDE</h2>
                <PrimaryButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
