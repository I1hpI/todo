import React from "react";
import Delete from "./Delete.png";
import edit from "./edit.png";
import info from "./info.png";

const Todo = ({
  text,
  todos,
  todo,
  setTodos,
  date,
  todoEditing,
  setTodoEditing,
  editingText,
  setEditingText,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            
          };
        }
        return item;
      })
    );
  };

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
       
       
      </li>
      <input type="checkbox" defaultChecked={todo.completed} style={{ height: 30, width: 30 }} onClick={completeHandler} className="complete-btn">
        {/* <img alt="" src={Delete} style={{ height: 30, width: 30 }} /> */}
      </input>
      {todo.id === todoEditing ? (
        <input type="text" defaultValue={todo.text} onChange={(e) => setEditingText(e.target.value)} />
      ) : (
        <div className={`addedtext ${todo.completed ? "completed" : ""}`}>{todo.text}</div>
      )}

      {todo.id === todoEditing ? (
        <button
         onClick={() => submitEdits(todo.id)}>
           Edit</button>
      ) : (
        <button className="edit pointer" onClick={() => setTodoEditing(todo.id)}>
        
          <img alt="" src={edit} style={{ height: 20, width: 20 }} />
        </button>
      )}
      <button onClick={deleteHandler} className="trash-btn">
        <img alt="" src={Delete} style={{ height: 15, width: 15 }} />
      </button>
      <img className="info pa1"alt="" src={info} style={{ height: 23, width: 23 }} />
      <span className="date cursor f7">{date}</span>
    </div>
  );
};

export default Todo;
