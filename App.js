import React, { Component } from "react";
import Output from "./components/Output";
import B from "./components/B";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "Hello World",
      randomNumber: null,
    };
  }

  handlerData = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handlerNumber = (e) => {
    this.setState({
      randomNumber: 1000 * e,
    });
  };

  render() {
    return (
      <div className="container input-field col s6">
        <p>Task 1</p>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handlerData}
        />
        <Output data={this.state.inputText} />
        <p>Task 2 </p>

        <B getRandom={this.handlerNumber} />
        <p>{this.state.randomNumber}</p>
      </div>
    );
  }
}

export default App;
