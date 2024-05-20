import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/gerson.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> TE CUENTO </span> SOBRE MI   
            </h1>
            <p className="home-about-body">
            Me enamoré de la programación y tengo 2 años de experiencia en programación web lo que me ha permitido
            aprender y desarrollar paginas y sistemas web....
            tambien tengo un año de experiencia en QA lo que sigo en constate crecimiento de ambas cosas 
              <br />
              <br />Experiencia en desarrollo web con:
              <i>
                <b className="purple"> HTML & CSS, Javascript, React y PHP</b>
              </i>
              <br />
              <br />Experiencia en QA con:
              <i>
                <b className="purple"> Selenium y Postman </b>
              </i>
              <br />
              <br />Experiencia en BD con:
              <i>
                <b className="purple"> SQL y MYSQL </b>
              </i>
              <br />
              <br />Experiencia en Gestión de proyectos con:
              <i>
                <b className="purple"> Jira, Trello y AWS </b>
              </i>
              <br />
              <br />
      
              
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GersonCode-prog"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/gersoncode"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gerson-enrique-batun-suriano-21b62b245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gersonsuriano77/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
