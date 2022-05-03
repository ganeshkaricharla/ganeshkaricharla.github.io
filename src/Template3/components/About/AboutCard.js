import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karicharla GNV Swamy Naidu</span>, Everyone call me <span className="purple">Ganesh. </span> 
            I am from <span className="purple"> Andhra Pradesh, India.</span>
            <br />I am currently pursuing my bachelors degree from <span className="purple"><em>Lovely Professional University</em></span>
            <br />
            <br />
            Apart from coding, some other activities that I love.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Comics
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#eb8913" }}>
            "Strive to Learn and Build things that make me grow!"{" "}
          </p>
          <footer className="blockquote-footer">Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
