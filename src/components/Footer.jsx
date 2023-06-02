import React from "react";
import FooterLogo from "../assets/images/estate_logo_0.png";
import {
  FaAngleRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCommentDollar,
} from "react-icons/fa";
import About from "../pages/About";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <div className="footerItem">
            <img src={FooterLogo} alt="FooterLogo" />
          </div>
          <div className="footerItem">
            <ul className="footerList">
              <li className="listItem">
                <Link href={<About />}>ABOUT US</Link>
              </li>
              <li className="listItem">
                <Link href="/">INSIDE THE MACALLAN</Link>
              </li>
              <li className="listItem">
                <Link href="/">THE SIX PILLARS</Link>
              </li>
              <li className="listItem">
                <Link href="/">CAREERS</Link>
              </li>
              <li className="listItem">
                <Link href="/">CONTACT US</Link>
              </li>
              <li className="listItem">
                <Link href="/">SUPPORT</Link>
              </li>
              <li className="listItem">
                <Link href="/">NEWSLETTER</Link>
              </li>
              <li className="listItem">
                <Link href="/">SUSTAINABILITY</Link>
              </li>
              <li className="listItem">
                <Link href="/">PARTNERSHIPS</Link>
              </li>
              <li className="listItem">
                <Link href="/">THE MACALLAN NEWSROOM</Link>
              </li>
            </ul>
          </div>
          <div className="footerItem">
            <ul className="footerList">
              <li className="listItem">
                <Link href="/">OUR WHISKY</Link>
              </li>
              <li className="listItem">
                <Link href="/">EXPLORE OUR SINGLE MALTS</Link>
              </li>
              <li className="listItem">
                <Link href="/">SHERRY OAK</Link>
              </li>
              <li className="listItem">
                <Link href="/">TRIPLE CASK MATURED</Link>
              </li>
              <li className="listItem">
                <Link href="/">THE M COLLECTION</Link>
              </li>
              <li className="listItem">
                <Link href="/">FINE & RARE</Link>
              </li>
              <li className="listItem">
                <Link href="/">LIMITED RELEASES</Link>
              </li>
              <li className="listItem">
                <Link href="/">TRAVEL RETAIL</Link>
              </li>
              <li className="listItem">
                <Link href="/">PAST RELEASES</Link>
              </li>
              <li className="listItem">
                <Link href="/">WHISKY EDUCATION</Link>
              </li>
            </ul>
          </div>
          <div className="footerItem">
            <ul className="footerList">
              <li className="listItem">
                <Link href="/">SHOP</Link>
              </li>
              <li className="listItem">
                <Link href="/">FAQS</Link>
              </li>
              <li className="listItem">
                <Link href="/">CONTACT US</Link>
              </li>
              <li className="listItem">
                <Link href="/">TERMS AND CONDITIONS OF SALE</Link>
              </li>
              <li className="listItem">
                <Link href="/">DELIVERY INFORMATION</Link>
              </li>
              <li className="listItem">
                <Link href="/">DISTILLERY EXPERIENCES - FAQS</Link>
              </li>
              <li className="listItem">
                <Link href="/">DISTILLERY EXPERIENCES - TERMS AND CONDITIONS</Link>
              </li>
              <li className="listItem">
                <Link href="/">RETURNS INFORMATION</Link>
              </li>
            </ul>
          </div>
          <div className="footerMedium">
            <div className="switcher">
              <Link href="/">
                <span>DELIVERING TO</span>
                {<FaAngleRight />}
              </Link>
            </div>
            <div className="socialLinks">
              <ul className="socialList">
                <li className="socialItem">
                  <Link href="/">{<FaFacebookF />}</Link>
                </li>
                <li className="socialItem">
                  <Link href="/">{<FaTwitter />}</Link>
                </li>
                <li className="socialItem">
                  <Link href="/">{<FaInstagram />}</Link>
                </li>
                <li className="socialItem">
                  <Link href="/">{<FaYoutube />}</Link>
                </li>
                <li className="socialItem">
                  <Link href="/">{<FaCommentDollar />}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="bottomList">
            <ul className="inlineMenu">
              <li className="menuItem">
                <Link href="/">DRINK RESPONSIBLY</Link>
              </li>
              <li className="menuItem">
                <Link href="/">EDRINGTON</Link>
              </li>
              <li className="menuItem">
                <Link href="/">PRIVACY POLICY</Link>
              </li>
              <li className="menuItem">
                <Link href="/">COOKIES POLICY</Link>
              </li>
              <li className="menuItem">
                <Link href="/">MANAGE COOKIE PREFERENCES</Link>
              </li>
              <li className="menuItem">
                <Link href="/">TERMS OF USE</Link>
              </li>
            </ul>
          </div>
          <div className="copyrights">
            <p>© 2023 The Macallan Distillers Limited, The Macallan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
