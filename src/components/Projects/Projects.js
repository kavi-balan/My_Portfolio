import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath={"../../Assets/Projects/udemy.png"}
              isBlog={false}
              title="Udemy Clone"
              description="A clone of Udemy website built with HTML and CSS."
              ghLink="https://github.com/"
              demoLink="https://kavi-balan.github.io/Udemy-clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/saloon.png"}
              isBlog={false}
              title="Saloon Project"
              description="A saloon website project built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/tripadvisor.png"}
              isBlog={false}
              title="Trip Advisor Clone"
              description="A clone of Trip Advisor built with HTML and Tailwind CSS."
              ghLink="https://github.com/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/nostra.png"}
              isBlog={false}
              title="Nostra"
              description="A project named Nostra built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/"
              demoLink="https://errormakesclever.github.io/Nostra-Ecommerce-Js/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"../../Assets/Projects/weather.png"}
              isBlog={false}
              title="Weather Page"
              description="A weather page built with HTML, CSS, and JavaScript."
              ghLink="https://github.com/"
              demoLink="https://weather-page-three.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
