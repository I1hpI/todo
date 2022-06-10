import {getCurrentDate} from './date'
import React from "react";


const Form= ({ inputText, setInputText, todos, setTodos,setStatus })=>{
    const inputTextHandler = (e) => {
       
        setInputText(e.target.value);
      };
      const submitTodoHandler = (e) => {
        e.preventDefault();
       if (inputText!==""){setTodos([
          ...todos,
          { text: inputText,date:getCurrentDate(), completed: false, id: Math.random() * 1000}
        ]);}
        setInputText("");
      };

      const statusHandler=(e)=>{
        setStatus(e.target.value);
      }
    return(
     <div>
        
        <div className="form">

        <input 
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder={"add task"}
        className="todo-input br2 ba  b--black-10  shadow-4" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          Add
        </button>
        </div>
        
         <hr/>
       
        <div className="filter"><span>Filter</span>
                <select onChange={statusHandler} name="todos" className="filter-todo pa0">
                     <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Has Due Date</option>
                </select><span>Sort</span>
                <select name="todos" className="filter-date">
                    <option value="duedate">Due Date</option>
                    <option value="added date">Added Date</option>
                </select>
            </div>
     </div>
        
    )
}
export default Form;

