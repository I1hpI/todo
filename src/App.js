import Form from "./components/Form";
import { useState, useEffect } from "react";
import check from "./components/check.png";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFliteredTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFliteredTodos(todos.filter((todo) => todo.completed === true ));
        break;
      case "uncompleted":
        setFliteredTodos(todos.filter((todo) => todo.completed === false ));
        break;
      default:
        setFliteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if(!todos.length) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }}
    return (
      <div className="App br3 ba  b--black-10 mv5 w-100 w-100-m w-100-l mw7 pa4 shadow-5 center">
        
        <header><img alt=""src={check} style={{ height: 30, width: 30 }}/>
          <h3 className="pa2">My Todo-s</h3>
        </header>
        <Form
          setStatus={setStatus}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
      
        />

        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
          todoEditing={todoEditing} 
          setTodoEditing={setTodoEditing}
          editingText={editingText} 
          setEditingText={setEditingText}

        />
        
      </div>
    )
    } 


export default App;
