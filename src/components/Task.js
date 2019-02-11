import React from "react";
import "./Task.css";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do
          <span> {date} </span>
          <button className="task-button-done" onClick={() => props.change(id)}>
            zostało zrobione
          </button>
          <button className="task-button-x" onClick={() => props.delete(id)}>
            X
          </button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        {" "}
        <p>
          <strong>{text} </strong>
          <em>(zrobić do {date})</em>
          <br />- potwierdzenie wykonania <span>{finish}</span>
          <button className="task-button-x" onClick={() => props.delete(id)}>
            X
          </button>
        </p>{" "}
      </div>
    );
  }
};

export default Task;
