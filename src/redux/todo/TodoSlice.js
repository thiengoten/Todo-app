import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('todos', JSON.stringify(state))
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1)
            localStorage.setItem('todos', JSON.stringify(state))
        },
        updateTodo: (state, action) => {
            state.splice(action.payload.id, 1, action.payload.text)
        },
    },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
