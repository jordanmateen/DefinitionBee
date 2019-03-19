import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Play.css";

let GameOver = ({ score }) => {
  // const submitGameResults = () =>{
  //     axios.pot('/definition/highscore').then((res)=>{
  //         this.setState({

  //         })
  //     })
  // }

  return (
    <Container>
      <Row>
        <Col />
        <Col>
          <h1 className="center">GAME OVER</h1>{" "}
        </Col>
        <Col />
      </Row>

      <Row>
        <Col />
        <Col>
          <h2 className="center">{score}</h2>
          <form>
            <input
              id="username"
              className="definitionAnswer"
              type="text"
              placeholder="Enter your username"
            />
            {/* <button onClick = { ()=>{ submitGameResults() }}>Sumbit Game Result </button> */}
          </form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default GameOver;
