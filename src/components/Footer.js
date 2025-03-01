import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Hanoi</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0974 017 120
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              thanhnx304@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            I'm an IT student passionate about creating interactive, responsive
            web applications, skilled in HTML, CSS, JavaScript, ReactJS, and
            modern UI/UX design. I'm eager to learn and grow through hands-on
            experience in a dynamic team.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/ujbmnm.nguyeh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/_spr.thanh_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nguyen-xuan-thanh-2a004a353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
