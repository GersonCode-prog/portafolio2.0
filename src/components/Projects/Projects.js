import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gebs from "../../Assets/Projects/gebs.png";
import funeraria from "../../Assets/Projects/funeraria.png";
import soluciones from "../../Assets/Projects/soluciones.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Recientes <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gebs}
              isBlog={false}
              title="cafeteriagebs"
              description="La página web de GEBS COFFE es un destino virtual para los amantes del café y aquellos interesados en explorar una variedad de productos relacionados con el café Desde granos de café de alta calidad hasta herramientas y accesorios para preparar la bebida perfecta GEBS COFFE ofrece una experiencia completa para los aficionados al café "
              demoLink="https://cafeteriagebs.netlify.app"
              ghLink="https://cafeteriagebs.netlify.app"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funeraria}
              isBlog={false}
              title="FunerariaSanJose"
              description="Una página web de funeraria es un espacio digital diseñado para ofrecer información y servicios relacionados con los arreglos funerarios y el duelo. Esta página suele ser un recurso importante para las personas que están enfrentando la pérdida de un ser querido, así como para aquellos que desean planificar con anticipación sus propios arreglos funerarios."
              demoLink="https://funerariasanjose.netlify.app"
              ghLink="https://funerariasanjose.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soluciones}
              isBlog={false}
              title="Cyberworldtechsolutions"
              description="Una Pagina web de soluciones de sistemas tanto de hardware y software creada con la motivacion de darse a conocer por internet creada con las tecnologias HTML5, CSS3 y JS."
              demoLink="https://cyberworldtechsolutions.netlify.app/"
              ghLink="https://cyberworldtechsolutions.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
