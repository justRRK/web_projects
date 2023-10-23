import "./App.css";
import "./ToDoItems.js";
import ToDoItems from "./ToDoItems.js";
import { useState } from "react";

function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (validateTask()) {
      setTasks([{ taskName: taskTitle, state: "New" }, ...tasks]);
      setTaskTitle("");
    } else {
      alert("Task is empty or already exists!");
    }
  }

  function validateTask() {
    if (taskTitle !== "") {
      let filteredTasks = tasks.filter((task) => task.taskName === taskTitle);
      return filteredTasks.length === 0;
    }
    return false;
  }

  const handleCallback = (args) => {
    // Update the name in the component's state
    if (args.action === "delete") {
      let updatedTasks = tasks.filter((task) => task !== args.task);
      setTasks(updatedTasks);
    } else {
      setTasks(tasks);
      document.getElementById("inputBox").focus();
    }
  };

  return (
    <div className="App">
      <h1 id="Heading">TASKS</h1>
      <hr className="Seperator"></hr>
      <div id="InputBoxContainer">
        <input
          id="inputBox"
          value={taskTitle}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
          onChange={(e) => setTaskTitle(e.target.value)}
          type="text"
          placeholder="Add task here"
        />
        <button id="AddButton" onClick={() => addTask()}>
          <i id="AddIcon" className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div id="TaskListContainer">
        {tasks.map((t, index) => {
          return (
            <ToDoItems
              key={index}
              index={index}
              task={t}
              parentCallback={handleCallback}
            ></ToDoItems>
          );
        })}
      </div>
    </div>
  );
}

export default App;
