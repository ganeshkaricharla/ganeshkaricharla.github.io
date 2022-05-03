import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Karicharla GNV Swamy Naidu</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://github.com/ganeshkaricharla"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ganeshkaricharla/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/ganeshk147/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
              <a 
                href="mailto:ganeshkaricherla@gmail.com"
                style={{ color: "white" }}
              >ganeshkaricherla@gmail.com</a>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
