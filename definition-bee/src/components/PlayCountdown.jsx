import React, { Component } from "react";

class PlayCountdown extends Component {
  // We need to redo this code I just copy pasted it to keep it moving. Prob a better React way to do this.

  render() {
    var timeleft = 11;
    var downloadTimer = setInterval(function() {
      document.getElementById("countdown").innerHTML =
        timeleft + " seconds remaining...";
      timeleft -= 1;
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML =
          "Careful, 3 strikes and you're out! You got this, keep going!";
      }
    }, 1000);
    return <div className="playCountdown" id="countdown" />;
  }
}

export default PlayCountdown;
