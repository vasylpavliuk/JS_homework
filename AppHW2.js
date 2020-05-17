import React, { Component } from "react";
import TaskList from "./components/TaskList";
import "./AppHW2.css";
import { Button } from "react-materialize";

class AppHW2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["to do morning yoga", "go hiking", "go to village"],
      currentTask: "",
      isDone: [false, false, false],
    };
  }

  inputDataHandler = (e) => {
    this.setState({
      currentTask: e.target.value,
    });
  };

  saveTaskHandler = (e) => {
    let tasks = [...this.state.tasks];
    let isDone = [...this.state.isDone];
    if (this.state.currentTask !== null && this.state.currentTask !== "") {
      tasks.push(this.state.currentTask);
      isDone.push(false);
      this.setState({
        tasks: tasks,
        currentTask: "",
        isDone: isDone,
      });
    }
  };

  checkedTaskHandler = (taskIndex) => {
    if (this.state.isDone[taskIndex] === false) {
      let isDone = [...this.state.isDone];
      isDone[taskIndex] = true;
      this.setState({
        isDone: isDone,
      });
    }
    console.log(this.state);
  };

  deleteTaskHandler = (taskIndex) => {
    let tasks = [...this.state.tasks];
    let isDone = [...this.state.isDone];
    tasks.splice(taskIndex, 1);
    isDone.splice(taskIndex, 1);
    this.setState({
      tasks: tasks,
      isDone: isDone,
    });
  };

  changeTaskHandler = (taskIndex) => {
    let tasks = [...this.state.tasks];
    let isDone = [...this.state.isDone];
    let task = tasks[taskIndex];
    if (this.state.currentTask === "") {
      tasks.splice(taskIndex, 1);
      isDone.splice(taskIndex, 1);
      this.setState({
        tasks: tasks,
        currentTask: task,
        isDone: isDone,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card-panel">
          <h1>To Do:</h1>
          <ul className="collection">
            {this.state.tasks.map((task, index) => {
              return (
                <TaskList
                  task={task}
                  key={index}
                  done={() => this.checkedTaskHandler(index)}
                  deleted={() => this.deleteTaskHandler(index)}
                  changed={() => this.changeTaskHandler(index)}
                  isDone={this.state.isDone[index]}
                />
              );
            })}
          </ul>

          <h5>Task</h5>
          <div className="input-field col s6">
            <input
              type="text"
              className="validate"
              onChange={this.inputDataHandler}
              value={this.state.currentTask}
              id="task"
              placeholder="What do you need to do?"
            ></input>
            <Button type="text" onClick={this.saveTaskHandler}>
              Save Item
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHW2;
