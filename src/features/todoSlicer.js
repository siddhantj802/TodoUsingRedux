import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = { 
    todoList : [{id:nanoid() , task: 'Learn Redux'}
               ]}

export const todoSlice = createSlice({
    name: 'todo',
    initialState
    ,
    reducers: {
        addTodo: (state,action) => {
            let newTodo = {
                id: nanoid(),
                task: action.payload
            }
            state.todoList.push(newTodo);
        },
        editTodo: (state, action) => {
            let {todoList} = state
            return todoList.map((item) => {
              if (item.id === action.payload.id) {
                return {
                  ...item,
                  task: action.payload.task,
                };
              }
              return item;
            });
          },
        deleteTodo: (state,action) => {
            let{todoList} = state
            state.todoList = todoList.filter((item) => item.id !== action.payload)
        }
    }
})

export const {addTodo , editTodo , deleteTodo} = todoSlice.actions
export default todoSlice.reducer