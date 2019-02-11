import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "dostać prace",
        date: "2058-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "zagrać wreszcie",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "The Software House",
        date: "2018-02-25",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "zrobić to do liste",
        date: "2018-09-05",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "dokoczyć kurs",
        date: "2016-12-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "Piwko",
        date: "2018-06-05",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: "zagrać w fife",
        date: "2098-10-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 8,
        text: "dać czadu",
        date: "2022-02-15",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("detele elementu o id" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change elementu o id" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text: text, // teskt z imputa
      date: date, // teskt z imputa
      important: important, // wartość z imputa
      active: true,
      finishDate: null
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1> <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />{" "}
      </div>
    );
  }
}

export default App;
