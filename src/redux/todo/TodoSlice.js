import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todos = {
                id: uuidv4(),
                text: action.payload,
            }
            state.push(todos)
            localStorage.setItem('todos', JSON.stringify(state))
        },
        removeTodo: (state, action) => {
            const result = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(result))
            return result
        },
        updateTodo: (state, action) => {
            state.splice(action.payload.id, 1, action.payload.text)
        },
    },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
