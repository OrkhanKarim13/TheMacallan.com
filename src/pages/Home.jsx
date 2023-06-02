import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import img from "../assets/images/home1.jpg";
import img2 from "../assets/images/home2.jpg";
import img3 from "../assets/images/home3.jpg";
import img4 from "../assets/images/home4.jpg";
import bottle1 from "../assets/images/mac-bottle (1).png";
import bottle2 from "../assets/images/mac-bottle (2).png";
import bottle3 from "../assets/images/mac-bottle (3).png";
import bottle4 from "../assets/images/mac-bottle (4).png";
import bottle5 from "../assets/images/mac-bottle (5).png";
import Boutiquebg from "../assets/images/btgbg.jpg";
import leftImg from "../assets/images/Distillery_2.png";
import rightImg from "../assets/images/TMS hero cropped.jpg";
import PillarImg from "../assets/images/distillery-tour-background.jpg";
import PrimaryButton from "../components/PrimaryButton";

const Home = () => {
  return (
    <section className="home">
      <div className="slider">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="homeContent">
        <div className="homeInfo">
          <span className="italicHead">Discover</span>
          <h2 className="contentTitle">THE MACALLAN FOLIO 7</h2>
          <p className="contentInfo">
            Introducing Folio 7, The Boffins Baffled. The seventh release in The
            Macallan Archival series, which was created to commemorate our
            legendary print, press and advertising campaigns of the 1970s, 1980s
            and 1990s.
          </p>
          <PrimaryButton />
        </div>
      </div>
      <div className="singleMalts">
        <div className="row">
          <div className="bottles">
            <img className="product1" src={bottle3} alt="bottle" />
            <img className="product2" src={bottle5} alt="bottle" />
            <img className="product3" src={bottle4} alt="bottle" />
            <img className="product4" src={bottle2} alt="bottle" />
            <img className="product5" src={bottle1} alt="bottle" />
          </div>
          <div className="prductInfo">
            <span className="italicTitle">Explore The Range</span>
            <h2 className="infoTitle">EXPLORE OUR SINGLE MALTS</h2>
            <div className="infoCaption">
              Each and every Macallan single malt whisky reveals our unrivalled
              commitment to the mastery of wood and spirit since 1824...
            </div>
            <PrimaryButton />
          </div>
        </div>
      </div>
      <div className="boutique">
        <div className="sectionCover">
          <div className="sectionImg">
            <img src={Boutiquebg} className="boutiqueImg" alt="Boutique" />
          </div>
          <div className="signPostContent">
            <span className="italicTitle">Discover</span>
            <h2 className="signPostHead">THE MACALLAN ONLINE BOUTIQUE</h2>
            <p className="signCaption">Explore our Whisky and Gifts</p>
            <PrimaryButton />
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="container">
          <div className="explore">
            <div className="leftImg">
              <img src={leftImg} alt="leftImg" />
            </div>
            <div className="imgInfo">
              <span className="italicTitle">The Macallan Estate</span>
              <h2 className="leftTitle">VISIT THE DISTILLERY</h2>
              <PrimaryButton />
            </div>
          </div>
          <div className="join">
            <div className="rightImg">
              <img src={rightImg} alt="rightImg" />
            </div>
            <div className="imgInfo">
              <span className="joinTitle">Join</span>
              <h2 className="rightTitle">THE MACALLAN SOCIETY</h2>
              <p className="rightText">
                Join us for a rich experience with The Macallan. You will be the
                first to hear exciting news, learn about experiences, new
                product releases and access special, behind the scenes content.
              </p>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </div>
      <div className="sixPillar">
        <div className="sectionCover">
          <img src={PillarImg} alt="PillarImg" />
        </div>
        <div className="sectionInfo">
          <span className="italicTitle">The Six Pillars</span>
          <h2 className="pillarTitle">CHARACTER THAT RUNS DEEP</h2>
          <p className="pillarText">
            The Six Pillars are the foundation stones of everything we do. From
            place to process, people and passion, the Six Pillars are the
            backdrop to The Macallan's unique spirit.
          </p>
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
