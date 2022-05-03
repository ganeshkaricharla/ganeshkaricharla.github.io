import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle2 from "../Particle2";

import invmgmt from "../../Assets/Projects/invmgmt.svg";
import nameit from "../../Assets/Projects/nameit.svg";
import flashtype from "../../Assets/Projects/flashtype.svg";
import pokedex from "../../Assets/Projects/pokedex.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle2 />
      <Container>
        
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invmgmt}
              title="Inventory Management"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book."
              githubLink="https://github.com/ganeshkaricharla/invmgmt"
              liveLink="http://invmgmthvg.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nameit}
              title="Name it"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book."
              githubLink="https://github.com/ganeshkaricharla/nameit"
              liveLink="https://ganeshkaricharla.me/nameit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashtype}
              title="Flash Type"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when a"
              githubLink="https://github.com/ganeshkaricharla/flashtype"
              liveLink="https://ganeshkaricharla.me/flashtype/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              title="Pokedex"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book."
              githubLink="https://github.com/ganeshkaricharla/pokedex"
              liveLink="https://ganeshkaricharla.me/pokedex/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
