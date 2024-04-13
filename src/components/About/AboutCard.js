import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hola Soy <span className="purple">Gerson Enrique Batun Suriano </span>
            soy de  <span className="purple"> Guatemala </span>
            <br />
            Actualmente trabajo como desarrollador de software Freelance
            <br />
            Tengo Cierre de Pemsun En Ingieneria en Sistemas de la Universidad Mariano Galvez de Guatemala
            <br />
            <br />
            Tambien me gusta desarrollar otras actividades
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar Videojuegos 
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer Ejercicio 
            </li>
            <li className="about-activity">
              <ImPointRight />Escuchar Musica
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "La clave para construir un buen software es pensar en grande y empezar pequeño."{" "}
          </p>
          <footer className="blockquote-footer">Ben Collins-Sussman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
