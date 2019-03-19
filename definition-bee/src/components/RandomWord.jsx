import React, { Component } from "react";
var unirest = require("unirest");

export default class RandomWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

   componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  {item.name} | {item.email}
                </li>
              ))}
              ;
            </ul>
            <button>Button</button>
          </div>
        </div>
      );
    }
  }
}
