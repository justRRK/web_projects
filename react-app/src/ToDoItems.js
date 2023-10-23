import { useState } from "react";
import "./ToDoItems.css";

function ToDoItems(props) {
  const task = props.task;
  const index = props.index + 1;

  const [state, setState] = useState(task.state);
  const [background, setButtonBackground] = useState("");

  const onTrigger = (event) => {
    let action = "";
    switch (event.target.id) {
      case "delete":
        action = "delete";
        break;
      case "selectNew":
        task.state = "New";
        break;
      case "selectInProgress":
        task.state = "In Progress";
        break;
      case "selectDone":
        task.state = "Done";
        break;
      default:
        break;
    }
    setState(task.state);
    applyButtonBackround();
    props.parentCallback({ task, action: action });
    event.preventDefault();
  };

  function applyButtonBackround() {
    switch (task.state) {
      case "New":
        setButtonBackground("crimson");
        break;
      case "In Progress":
        setButtonBackground("orange");
        break;
      case "Done":
        setButtonBackground("green");
        break;
      default:
        break;
    }
  }

  return (
    <div id="TaskContainer">
      <h1 id="TaskTitle">{index + ". " + task.taskName}</h1>
      <div id="DropDownButtonContainer" style={{ background }}>
        <button id="ProgressButton">{state}</button>
        <div id="DropDownContent">
          <button
            id="selectNew"
            className="DropDownListButton"
            onClick={onTrigger}
          >
            New
          </button>
          <button
            id="selectInProgress"
            className="DropDownListButton"
            onClick={onTrigger}
          >
            In Progress
          </button>
          <button
            id="selectDone"
            className="DropDownListButton"
            onClick={onTrigger}
          >
            Done
          </button>
        </div>
      </div>
      <button className="DeleteButton" onClick={onTrigger}>
        <i id="delete" className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default ToDoItems;
