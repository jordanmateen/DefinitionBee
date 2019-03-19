import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Login extends Component {
  //handles google login on click
  login() {
    axios
      .get("definition/google")
      .then(({ data }) => {
        console.log(data);
      })
      .catch();
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Login Page</h2>
          <p>Where All Saints Fans ❤️️ATL 4 Ever</p>
          <p>
            Matthew Thomas Ryan (born May 17, 1985), nicknamed Matty Ice, is an
            American football quarterback and team captain for the Atlanta
            Falcons of the National Football League (NFL). After playing college
            football for Boston College, Ryan was drafted by the Falcons with
            the third overall pick in the first round of the 2008 NFL Draft.
            Ryan was Boston College's starting quarterback from 2005 to 2007,
            leading them to three bowl victories and a 25–7 record in 32 starts.
            He threw for 200 or more yards 15 times and is third all time in
            school history in passing yards and in pass completions.
          </p>
          <h2>Matt Ryan Is Famous For Always Being Better Than Drew Breeze</h2>
          <p>
            He earned MVP of the game honors at the 2005 MPC Computers Bowl.[1]
            In 2007, Ryan led his team to an ACC Atlantic Division championship
            and was named ACC Player of the Year.[2] During his rookie year,
            Ryan started all 16 games for the Falcons and led them to the
            playoffs with an 11–5 season record. He earned honors as the NFL
            Offensive Rookie of the Year.{" "}
          </p>
          <p>
            In 2016, Ryan was the NFL's Most Valuable Player and led the Falcons
            to Super Bowl LI, where they were defeated by the New England
            Patriots. After signing a $150 million five-year extension with the
            Falcons in 2018, Ryan became the first $30 million per year
            quarterback and the highest paid player in NFL history until being
            surpassed months later by Aaron Rodgers.
          </p>{" "}
          <button onClick={() => alert("I love Matt Ryan")}>log in</button>
        </Jumbotron>
      </Container>
    );
  }
}
