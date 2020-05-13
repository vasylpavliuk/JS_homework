import React from "react";
import { Button } from "react-materialize";

function c(props) {
  return (
    // <div>
      <Button text="text" onClick={() => props.getRandom(Math.random().toFixed(7))}>
        Randon Number
      </Button>
    // </div>
  );
}

export default c;
