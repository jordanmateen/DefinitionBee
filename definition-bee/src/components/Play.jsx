import React from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
  ToggleButtonGroup
} from "react-bootstrap";
import "./Home.css";
import "./Play.css";
import "./StrikeCount";

import axios from "axios";
import Timer from "react-compound-timer";
import "./CountDownTimer";
import CountDownTimer from "./CountDownTimer";
import GameOverContainer from "../containers/gameOverContainer";

let Play = ({
  loadDefinition,
  loadGame,
  word,
  questionNumber,
  answer,
  score,
  strike,
  skips,
  definition,
  checkStrike
}) => {
  const startGame = () => {
    axios
      .get("/definition/random")
      .then(({ data }) => {
        loadGame(data);
        // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
      })
      .catch();
  };

  const submitAnswer = e => {
    e.preventDefault();
    let ans = document.getElementById("answer").value;

    answer(ans.toLowerCase());
    axios.get("/definition/random").then(({ data }) => {
      loadDefinition(data);

      //console.log(data)
      // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
    });
    document.getElementById("answer").value = "";
  };

  class StrikeCount extends React.Component {
    render() {
      return (
        <div>
          {(() => {
            switch (strike) {
              case 0:
                return (
                  <Row className="strikeCount">
                    <Col className="noStrike">X</Col>
                    <Col className="noStrike">X</Col>
                    <Col className="noStrike">X</Col>
                  </Row>
                );
              case 1:
                return (
                  <Row className="strikeCount">
                    <Col className="strike">X</Col>
                    <Col className="noStrike">X</Col>
                    <Col className="noStrike">X</Col>
                  </Row>
                );
              case 2:
                return (
                  <Row className="strikeCount">
                    <Col className="strike">X</Col>
                    <Col className="strike">X</Col>
                    <Col className="noStrike">X</Col>
                  </Row>
                );
              case 3:
                return (
                  <Row className="strikeCount">
                    <Col className="strike">X</Col>
                    <Col className="strike">X</Col>
                    <Col className="strike">X</Col>
                    <button onClick={() => checkStrike()}>Replay</button>
                  </Row>
                );
              default:
                return "#FFFFFF";
            }
          })()}
        </div>
      );
    }
  }

  return (
    <Container>
      {strike === 3 ? (
        <GameOverContainer />
      ) : (
        <Row>
          <Col className="p-4" sm={8}>
            <h2 className="center">Correctly Define and Spell:</h2>

            <div className="definitionContainer p-4">
              <br />
              {definition}
            </div>
            <Row>
              <Col />
              <Col>
                <form>
                  <input id="answer" className="definitionAnswer" type="text" />
                  <button
                    className="btn-info btn-block btn-lg"
                    onClick={e => submitAnswer(e)}
                  >
                    Submit
                  </button>
                </form>
              </Col>
              <Col />
            </Row>

            <Row>
              <Col />
              <Col>
                <div id="cdt">
                  <CountDownTimer />
                </div>
              </Col>

              <Col />
            </Row>

            <Row>
              <Col />
              <Col>
                <button
                  className="btn-warning btn-md btn-block"
                  onClick={() => startGame()}
                >
                  Play
                </button>
              </Col>
              <Col />
            </Row>
          </Col>
          <Col sm={4}>
            <Jumbotron className="jumboChalkboard">
              <Col>
                <h2 className="homeChalkWhite">SCOREBOARD</h2>
                <p>{score} points</p>
                <hr />
                <Row className="strikesBox">
                  <Col>
                    <h3>STRIKES</h3>
                    <StrikeCount />
                    {console.log("the count is " + strike)}
                  </Col>
                  <Col>
                    <h3>SKIPS</h3>
                    <Row className="skipCount">
                      <Col className="skip">S</Col>
                      <Col className="skip">S</Col>
                      <Col className="skip">S</Col>
                    </Row>{" "}
                  </Col>

                  <hr />
                </Row>
              </Col>
            </Jumbotron>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Play;
