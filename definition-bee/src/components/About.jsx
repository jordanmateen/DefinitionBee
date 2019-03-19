import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h3>RULES</h3>
          <ul>
            <li>
              Correctly define and spell the word based on the definition that
              appears on screen.
            </li>
            <li>Each correctly spelled word is worth 1 point.</li>
            <li>Careful! You only get one guess!</li>
            <li>Three strikes and you're out.</li>
          </ul>
          <h3>ABOUT US</h3>
          <p>
            (Ron Cagle && Jordan Mateen) built this app using React.js, Redux
            and our love of spelling and brutaly difficult games.
          </p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About </Button>
        </Link>
      </Container>
    );
  }
}
