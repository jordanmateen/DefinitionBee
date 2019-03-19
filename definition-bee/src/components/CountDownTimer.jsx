import React from "react";
import Timer from "react-compound-timer";

export default class CountDownTimer extends React.Component {
  render() {
    return (
      <Timer
        initialTime={10000}
        direction="backward"
        message="hello world"
        checkpoints={[
          {
            time: 5000,
            message: "Hello SPACE",
            callback: () => console.log("Better at least guess or skip!")
          },
          {
            time: 2000,
            callback: () => console.log("Better at least guess or skip!")
          },
          {
            time: 0,
            callback: () =>
              console.log(
                "This is where the game needs to add strike and next question"
              )
          }
        ]}
      >
        {() => (
          <div className="timer">
            <Timer.Seconds /> seconds remain
            <hr />
          </div>
        )}
      </Timer>
    );
  }
}
