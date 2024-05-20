import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Importa el componente Particle
import diplomaImage1 from "../../Assets/certificado1.jpg";
import diplomaImage2 from "../../Assets/certificado2.jpg";
import diplomaImage3 from "../../Assets/certificado3.jpg";
import diplomaImage4 from "../../Assets/certificado4.jpg";
import diplomaImage5 from "../../Assets/certificado5.jpg";
import diplomaImage6 from "../../Assets/certificado6.jpg";
import "./Diplomas.css";

function Diplomas() {
  return (
    <section className="diplomas-section">
      <Particle />
      <Container>
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage1} alt="Diploma 1" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 1</h3>
              <p>Descripción del diploma 1...</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage2} alt="Diploma 2" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 2</h3>
              <p>Descripción del diploma 2...</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage3} alt="Diploma 3" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 3</h3>
              <p>Descripción del diploma 3...</p>
            </div>
          </Col>
        </Row>
        {/* Nuevos diplomas */}
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage4} alt="Diploma 4" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 4</h3>
              <p>Descripción del diploma 4...</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage5} alt="Diploma 5" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 5</h3>
              <p>Descripción del diploma 5...</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={15} className="diploma">
            <img src={diplomaImage6} alt="Diploma 6" className="diploma-image" />
            <div className="diploma-description">
              <h3 className="diploma-title">Diploma 6</h3>
              <p>Descripción del diploma 6...</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Diplomas;
