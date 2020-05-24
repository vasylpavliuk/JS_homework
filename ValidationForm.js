import React from "react";
import { Button } from "react-materialize";
import "./ValidationForm.css";

function validationForm(props) {
  return (
    <form className="container" onSubmit={props.onSubmitClick}>
      <h5 className="center">LOG IN TO YOUR ACCOUNT</h5>
      <div className="input-field col s12 container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="validate"
          onChange={props.formChange}
          name="userEmail"
        />
      </div>
      <div className="input-field col s12  container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={props.formChange}
          name="userPassword"
        />
      </div>
      <div className="container">
        <label className="row">
          <input
            type="checkbox"
            className="filled-in"
            onChange={props.formChange}
            name="isChecked"
          />
          <span>Keep me log in</span>
        </label>
      </div>
      <div className="center">
        <Button type="submit" id="submit">
          LOG IN
        </Button>
      </div>

      <div className="center">
        <a href="#">Forgot your password?</a>
      </div>
    </form>
  );
}

export default validationForm;
