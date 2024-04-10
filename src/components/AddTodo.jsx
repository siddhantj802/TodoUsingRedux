import React from 'react'
import { addTodo } from '../features/todoSlicer'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function AddTodo() {
    const [input , setInput] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = (e) => {
        e.preventDefault()
         if ((input.trim()).length != 0) {
            dispatch(addTodo(input))
         }
         setInput('')
    }

  return (
    <form onSubmit={handleAddTodo}>
        <input type='text'
                placeholder='Tasks....'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
        <button type='submit'>Add</button>


    </form>
  )
}

export default AddTodo