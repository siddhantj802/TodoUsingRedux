import React, { useState } from 'react'
import { editTodo, deleteTodo } from "../features/todoSlicer";
import {useDispatch , useSelector} from 'react-redux'

function EditTodo() {
    const [inp , setInp] = useState('')
    const todo = useSelector(state => state.todoList)
    const dispatch = useDispatch()
  return (
    <div>
        <form>
        <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
        <button onclick = {dispatch(editTodo({ id, task: inp })) }Done></button>
    </form>
    </div>
  )
}

export default EditTodo