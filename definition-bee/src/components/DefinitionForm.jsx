import React from "react";
import axios from "axios";

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
      checkStrike();
  
      // console.log(e.target.value)
      // dispatch({type: "ANSWER", submittedAnswer: e.target.value})
      axios.get("/definition/random").then(({ data }) => {
        loadDefinition(data);
        //console.log(data)
        // dispatch({type: "LOAD_DEFINITON", definition: data.definition});
      });
    };

export default class DefinitionForm extends React.Component {
  render() {
    return (
      <form>
        <input id="answer" className="definitionAnswer" type="text" />
        <button
          className="btn-info btn-block btn-lg"
          onClick={e => submitAnswer(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}
