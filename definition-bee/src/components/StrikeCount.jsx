import React, { Component } from "react";

export default class StrikeCount extends React.Component {
  render() {
    return (
      <section>
        <h1>Color</h1>
        <h3>Name</h3>
        <p>{this.state.strike === 0}</p>
        <h3>Hex</h3>
        <p>
          {(() => {
            switch (this.state.strike) {
              case 0:
                return "0";
              case 1:
                return "1";
              case 2:
                return "2";
              default:
                return "#FFFFFF";
            }
          })()}
        </p>
      </section>
    );
  }
}
