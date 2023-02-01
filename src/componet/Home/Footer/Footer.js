import React from "react";
import "./Footer.css";
import { FormControl, InputGroup } from "react-bootstrap";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <p className="my-3">Patient people are successful in life</p>

          <p className="footer-social">
            Follow Us
            <span className="ms-3">
              <a href="/">
                <FacebookIcon></FacebookIcon>
              </a>
              <a href="/">
                <InstagramIcon></InstagramIcon>
              </a>

              <a href="/">
                <TwitterIcon></TwitterIcon>
              </a>
              <a href="/">
                <i className="footer-social-icon fab fa-pinterest"></i>
              </a>
            </span>
          </p>
        </li>
        {/* <li className="footer-item">
          <h4>Useful Links</h4>
          <Link to="/">About</Link>
          <a href="/">Login</a>
          <a href="/">News & Events</a>
          <a href="/">Contacts</a>
        </li> */}
        <li className="footer-item footer-item-contact">
          <h4>Contact With Us</h4>
          <span>
            <i className="fas fa-mobile-alt"></i> +8801983535597 01715006882
          </span>
          <span>
            <i className="fas fa-envelope"></i> md.sajibkhan199413@gmail.com{" "}
            <br></br>
            rhs06@yahoo.com
          </span>

          <InputGroup className="input-group">
            <FormControl
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="btn-book">Submit</button>
          </InputGroup>
        </li>
      </ul>
      <hr />

      <ul className="footer-bottom-list">
        <li className="footer-bottom-list--item mb-3 mb-lg-0"></li>
        <li className="footer-bottom-list--item">
          <small>Terms & Condition | Privacy & Policy | &copy;2023</small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
