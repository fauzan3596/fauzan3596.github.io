import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fauzan Ramadhan </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br /> I am a fresh graduate in Computer Science at Diponegoro University.
            <br />
            Additionally, I am student of LIA English Course until High-Intermediate.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You affect the world by what you browse!"{" "}
          </p>
          <footer className="blockquote-footer">Tim Berners-Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
