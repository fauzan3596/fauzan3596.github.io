import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="Internal System"
              description="Building a mobile-based internal system at PT Integra Solusi Mandiri using PHP and Dart with the Flutter and Lumen Framework and MySQL as the DBMS."
              ghLink="https://gitlab.com/integra_sm/ism-apps-v1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Redesign of the PT ISM Helpdesk Interface"
              description="Redesign the PT ISM Helpdesk System interface using the Usability Testing, USE Questopnnaire, and the Research-Based Web Design & Usability Guidelines methods."
              ghLink="https://www.figma.com/proto/yTvExCS5NZqUrk00g6vUyl/SKRIPSI?type=design&node-id=101-157&t=X2GKWX4buU9Z22hT-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=101%3A157&hide-ui=1"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
