import './App.css';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy Shopping", priority: true},
    { name: "Clean Bathroom", priority: false},
    { name: "Car's MOT", priority: true}
  ])

  const priorityStatus = function(priority) {
    let status;
    if (priority === true) {
      status = "High"
    } else {
      status = "Low"
    };
  };

  const [newTodo, setNewTodo] = useState("");

  const markTodoPriority = function(index) {
    const copyTodos = [...todos];
    const updatedTodo = {...copyTodos[index]};
    updatedTodo.priority = "low";
    copyTodos[index] = updatedTodo;
    setTodos(copyTodos);
  }
  
  const todoNodes = todos.map(function(todo, index){
    return (
      <li key={index} className={todo.priority ? "high" : "low"}>
        <span>
          {todo.name}
        </span>

        {todo.priority ? <span className="high"> High </span> : <button onClick={() => markTodoPriority(index)}>High</button>}
      </li>
    )
  })

  const handleTodoInput = function (event) {
    const value = event.target.value;
    setNewTodo(value);
  }

  const handleFormSubmit = function(evt){
    evt.preventDefault();
    const todo = {
      name: newTodo,
      priority: "low"
    };

    const copyTodos = [...todos]
    copyTodos.push(todo)

    setTodos(copyTodos);
    setNewTodo("");
  }

  return (
    <div className="App">

      <h1>Todo List</h1>
      <hr></hr>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new-todo">Add a new todo:</label>
        <input id="new-todo" type="text" value={newTodo} onChange={handleTodoInput} />
        <input type="submit" value="Save new todo" />
      </form>

      <ul>
        {todoNodes}
      </ul>

    </div>
  );
}

export default App;