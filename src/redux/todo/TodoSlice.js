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
        initTodo: (state, action) => {
            return [...action.payload]
        },
        removeTodo: (state, action) => {
            const result = state.filter((item) => item.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(result))
            return result
        },
        updateTodo: (state, action) => {
            const result = state.map((item) => {
                const y =
                    item.id === action.payload.id
                        ? { ...item, text: action.payload.todo }
                        : item
                return y
            })
            localStorage.setItem('todos', JSON.stringify(result))
            return result
        },
    },
})

export const { addTodo, removeTodo, updateTodo, initTodo } = todoSlice.actions

export default todoSlice.reducer
