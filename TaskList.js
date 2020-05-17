import React from "react";
import "./TaskList.css";
import { Button } from "react-materialize";

function taskList(props) {
  let className = (props.isDone === true) ? "done-task" : "";

  return (
    <li className="collection-item">
      <div className={className}>{props.task}</div>
      <div>
        <Button className="changed-button" onClick={props.changed} type="text">
          Change Item
        </Button>
        <Button className="done-button" onClick={props.done} type="text">
          V
        </Button>
        <Button className="delete-button" onClick={props.deleted} type="text">
          X
        </Button>
      </div>
    </li>
  );
}

export default taskList;
