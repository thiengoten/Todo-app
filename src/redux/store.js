import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo/TodoSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
})
