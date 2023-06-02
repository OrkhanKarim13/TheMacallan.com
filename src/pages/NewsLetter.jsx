import { useState } from "react";
import { object, string, number } from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const NewsLetter = () => {
  const loginSchema = object({
    month:number("Please enter month").required(),
    year:number("Please enter year").required(),
    city: string().required("Please enter your city"),
    lastname: string().required("Please enter your last name"),
    day: number("Please enter day").required(),
    name: string().required("Please enter your name"),
    email: string()
      .required("Please enter email address")
      .email("Please enter valid  emaill address"),
  });

  const [user, setUser] = useState({
    email: "",
    name: "",
    lastname: "",
    day: "",
    city: "",
    year: "",
    month: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await loginSchema.validate(user);
      Swal.fire({
        title: "Accepted!",
        text: "Please check your email address",
        imageUrl:
          "https://www.themacallan.com/sites/default/files/macallan-logo-tw.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Macallan",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        imageUrl:
          "https://www.themacallan.com/sites/default/files/macallan-logo-tw.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Macallan",
      });
    }
  };

  return (
    <section className="newsLetter">
      <div className="topBackground">
        <h1 className="topTitle">THE MACALLAN SOCIETY</h1>
        <p className="topInfo">
          As part of The Macallan Society, you will be the first to hear
          exciting news and gain exclusive access to all things The Macallan.
          Join us for a richer and more meaningful journey.
        </p>
      </div>
      <div className="form">
        <div className="formTitle">
          <h2>PERSONAL INFORMATION</h2>
        </div>
        <form>
          <div className="container">
            <div className="formContent">
              <div className="form-row">
                <div className="formInput">
                  <label className="firstName">FIRST NAME*</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={loginSchema.name}
                  />
                  <div className="formItemError">First name is required</div>
                </div>
                <div className="formInput">
                  <label className="firstName">LAST NAME*</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    value={loginSchema.lastname}
                  />
                  <div className="formItemError">Last name is required</div>
                </div>
              </div>
              <div className="form-row">
                <div className="formInput">
                  <label className="firstName">EMAIL ADDRESS*</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={loginSchema.email}
                    type="email"
                  />
                  <div className="formItemError">
                    Please enter your email address
                  </div>
                </div>
                <div className="formInput">
                  <label className="firstName">DATE OF BIRTH*</label>
                  <div className="formDate">
                    <input
                      type="number"
                      name="day"
                      placeholder="DD"
                      min="01"
                      max="31"
                      pattern="[0-9]*"
                      onChange={handleChange}
                      value={loginSchema.day}
                    />
                    <input
                      type="number"
                      name="month"
                      placeholder="MM"
                      min="01"
                      max="12"
                      pattern="[0-9]*"
                      onChange={handleChange}
                      value={loginSchema.month}
                    />
                    <input
                      type="number"
                      name="year"
                      placeholder="YYYY"
                      min="1900"
                      max="2023"
                      pattern="[0-9]*"
                      onChange={handleChange}
                      value={loginSchema.year}
                    />
                  </div>
                  <div className="formItemError">
                    Valid date of birth is required
                  </div>
                </div>
              </div>
              <div className="form-row">
                {" "}
                <div className="formInput">
                  <label className="firstName">COUNTRY/LOCATION*</label>
                  <select name="country">
                    <option value="-1">Select location</option>
                    <option value={"AZ"}>Azerbaijan</option>
                    <option value={"TR"}>Turkey</option>
                    <option value={"RU"}>Russia</option>
                    <option value={"GE"}>Georgia</option>
                  </select>
                  <div className="formItemError">
                    Please select your country
                  </div>
                </div>
                <div className="formInput">
                  <label className="firstName">NEAREST CITY*</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={loginSchema.city}
                    name="city"
                  />
                  <div className="formItemError">
                    Please add your nearest city
                  </div>
                </div>
              </div>
              <div className="confirmation">
                <p>
                  THE MACALLAN WILL PROCESS YOUR PERSONAL DATA IN ACCORDANCE
                  WITH OUR PRIVACY POLICY.
                </p>
              </div>
            </div>
            <div className="bottomForm">
              <button className="nextBtn" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
