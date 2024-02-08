import React from "react";
import logo from "../assets/Sohamlogo.png";

const Footer = () => {
  return (
    <div className="footer-dark" id="contact">
      <footer>
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-lg-4 item text">
              <img src={logo} className="w-50" alt="img" />
              <p className="pt-4">
                AN INDUSTRIAL PARK THAT IS DESIGNED AND EXECUTED KEEPING ALL THE
                BASIC INDUSTRIAL NEEDS ON THE MIND AND THAT TOO ON A LAND THAT
                HOLDS A HIGH APPRECIATION VALUE IN THE FUTURE. PARK IS READY
                WITH ALL THE AMENITIES READY AND THE BASIC INFRASTRUCTURE IN
                SOUND CONDITION.
              </p>
            </div>
            <div className="col-lg-4 item text">
              <h2>Contact Information</h2>
              <p>Email: info@sohamindustry.com</p>
              <p> Phone: +91 9714148332</p>
              <p>
                Address : SOHAM INDUSTRIAL PARK BAREJA-MAHIJADA-DHOLKA ROAD
                VILLAGE- MAHIJADA TAL, Gujarat 382425
              </p>
            </div>
            <div className="col-lg-4 item text">
              <h2>Location</h2>
              <iframe
                title="industry-location-map"
                width="90%"
                height="200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117675.01958001863!2d72.4448737889519!3d22.82674571290576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8d78a5d9d423%3A0x51c991cad85d2c20!2sSoham%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1704711163168!5m2!1sen!2sin"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
