// Action Creators for timer

let initialState = {
  question: {
    word: "",
    definition: ""
  },
  questionNumber: 1,
  answer: "",
  score: 0,
  strike: 0,
  skips: 3,
  highScores: [],
  // history : [],
  startedAt: undefined,
  stoppedAt: undefined,
  baseTime: undefined,
  currentUser: {
    username: "lsjhfdsl",
    highscore: ""
  }
};

let reducer = (state = initialState, actions) => {
  let { type, submittedAnswer, definition } = actions;
  switch (type) {
    case "LOAD_GAME":
      /**
       * Once users select to start the game the game the de
       */
      return {
        ...state,
        question: definition,
        score: 0,
        strike: 0,
        skips: 0
      };

    /**
     * check the answer against the word from api call and move on to the next question
     * if right{
     *      up date score
     *      increase question number
     *      new defintion
     *      if score is greater than high score new high score equal current points
     *      reset timer
     * }
     *
     * if wrong {
     *      take away a life/ or add strike
     *      if three strike move on to the next question
     *
     * }
     */

    case "CHECK_ANSWER":
      if (submittedAnswer === state.question.word) {
        return {
          ...state,
          questionNumber: state.questionNumber + 1,
          score: state.score + 1
        };
      } else {
        return {
          ...state,
          strike: state.strike + 1
        };
      }

    case "LOAD_DEFINITION":
      //console.log(definition)
      return {
        ...state,
        question: definition
      };

    case "SKIP":
      /**
       * Moves on to the next question
       * increase question number
       * new definition
       * decrease life - 1
       */

      return {
        ...state,
        strike: state.strike + 1
      };

    case "SUBMIT_SCORE":
      return {};

    case "CHECK_STRIKE":
      if (state.strike === 3) {
        return {
          ...initialState
        };
      } else {
        return {
          ...state
        };
      }

    case "GAME_OVER":
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;
