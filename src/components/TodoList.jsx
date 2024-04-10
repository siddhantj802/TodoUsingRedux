import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../features/todoSlicer";
import EditTodo from "./EditTodo";

function TodoList() {
  const todo = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [isEdit , setIsEdit] = useState(false)
  

  const update = () => {
    <EditTodo/>
  }
  
  return (
    <>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <textarea type="text" disabled = {isEdit}>{item.task}</textarea>
            <button onClick={() => dispatch(deleteTodo(item.id))}>🚩</button>
            <button onClick={() => setIsEdit(!isEdit) }>📝</button>
            <button onClick={ update}>🖊️</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
