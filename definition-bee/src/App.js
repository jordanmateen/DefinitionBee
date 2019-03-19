import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import PlayContainer from "./containers/playContainer";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/play" component={PlayContainer} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// export default App;

// // Old code I'm saving
// var unirest = require("unirest");
// const RapidAPI = require("rapidapi-connect");
// const rapid = new RapidAPI(
//   "DefinitionBee",
//   "7ee2744e37mshd8a5306a0515f48p13e6a7jsn51a27e9f1337"
// );

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json
//         });
//       });
//   }

//   render() {
//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <div className="App">
//           <div>
//             <ul>
//               {items.map(item => (
//                 <li key={item.id}>
//                   {item.name} | {item.email}
//                 </li>
//               ))}
//               ;
//             </ul>
//             <button>Button</button>
//           </div>
//         </div>
//       );
//     }
//   }
// }
