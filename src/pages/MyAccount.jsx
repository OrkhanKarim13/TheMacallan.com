// Import Icons
import {
  FaReacteurope,
  FaRegHandPointer,
  FaUncharted,
  FaUserCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";


const MyAccount = () => {
  return (
    <section className="myAcc">
      <div className="topBackground">
        <h1 className="topTitle">THE MACALLAN SOCIETY</h1>
        <p className="topInfo">
          Join The Macallan Society, where you will gain priority access to
          select whisky releases, My Macallan Journey, special recommendations
          and content tailored for you.
        </p>
      </div>
      <div className="login">
        <div className="container">
          <div className="signIN">
            <h2 className="signInTitle">SIGN IN</h2>
            <p className="signInText">
              Welcome back to The Macallan Society, please sign in with your
              email address and password.
            </p>
            <form className="signINform">
              <div className="formItem">
                <label for="email">EMAIL ADDRESS*</label>
                <input name="email" type="email"></input>
              </div>
              <div className="formItem">
                <label for="password">PASSWORD*</label>
                <input name="password" type="password"></input>
                <div className="forgot">
                  <Link href="/">FORGOT YOUR PASSWORD?</Link>
                </div>
                <div className="error">Password is required</div>
              </div>
              <button className="formBtn" type="submit">
                SIGN IN
              </button>
            </form>
          </div>
          <div className="signUP">
            <h2 className="signUpTitle">SIGN UP</h2>
            <p className="signUpText">
              Join us for a rich experience with The Macallan.
            </p>
            <div className="signUpList">
              <ul className="choices">
                <li className="listItem">
                  <span className="icon">
                    <FaReacteurope />
                  </span>
                  <span className="listText">
                    Priority access to The Macallan experiences
                  </span>
                </li>
                <li className="listItem">
                  <span className="icon">
                    <FaRegHandPointer />
                  </span>
                  <span className="listText">
                    Tailored products and content
                  </span>
                </li>
                <li className="listItem">
                  <span className="icon">
                    <FaUncharted />
                  </span>
                  <span className="listText">View your online orders</span>
                </li>
                <li className="listItem">
                  <span className="icon">
                    <FaUserCog />
                  </span>
                  <span className="listText">
                    Manage your communications preferences and personal details
                  </span>
                </li>
              </ul>
              <Link className="signBtn" href="/">SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
