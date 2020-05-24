import React, { Component } from "react";
import ValidationForm from "./components/ValidationForm";
import "./AppHW3.css";

class AppHW3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPassword: "",
      correctEmail: "PavlyukV@i.ua",
      correctPassword: "123456",
      isChecked: false,
    };

    this.formChangeHandler = this.formChangeHandler.bind(this);
    this.logInHandler = this.logInHandler.bind(this);
  }

  formChangeHandler(e) {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: updatedValue,
    });
  }

  logInHandler(e) {
    e.preventDefault();
    localStorage.setItem("test", "textcomplited");
    if (
      this.state.userEmail === this.state.correctEmail &&
      this.state.userPassword === this.state.correctPassword &&
      this.state.isChecked === true
    ) {
      alert("You are logged in");
    } else {
      alert("You failed to logged in. Please put correct email and password.");
    }
  }

  render() {
    return (
      <div className="container">
        <ValidationForm
          formChange={this.formChangeHandler}
          onSubmitClick={this.logInHandler}
        />
      </div>
    );
  }
}

export default AppHW3;
