import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jabedhossain">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/jabedhossainjabu">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="https://instagram.com/jabedhossainjabu">
                <img src={navIcon3} alt="instagram" />
              </a>
              <a href="https://twitter.com/xabedhossain">
                <img src={navIcon4} alt="twitter" />
              </a>
              <a href="https://github.com/jabedhossainswe">
                <img src={navIcon5} alt="github" />
              </a>
            </div>
            <p>
              Copyright 2023. All Rights Reserved to{" "}
              <a href="https://www.facebook.com/jabedhossainjabu">
                Jabed Hossain{" "}
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
