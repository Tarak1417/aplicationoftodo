import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";
import "./Home.css"

function Home() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodo(result.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id, done) => {
    axios
      .put("http://localhost:3001/update/" + id, { done: !done })
      .then((result) => {
        location.reload()
      })
      .catch((error) => console.log(error));
  };

  const handleDelete =(id , done)=>{
    axios.delete("http://localhost:3001/delete/"+id,{done : !done})
    .then((result) => {
      location.reload()
    })
    .catch((error) => console.log(error));
};
  

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id, todo.done)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done?'line_through':""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" onClick={()=>handleDelete(todo._id,todo.done)} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
