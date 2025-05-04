import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filterSlice";

const initialState = {
    todos: [],
    currentTodo: null,
};

const slice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => { 
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => { 
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
       editTodo: (state, action) => { 
            state.currentTodo = action.payload;
        },
        updateCurrentTodo: (state, action) => { 
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            if (index !== -1) {
                state.todos[index] = action.payload;
                state.currentTodo = null;
            }
        }
    },
});

export const selectTodos = (state) => state.todos.todos;
export const selectCurrentTodo = (state) => state.todos.currentTodo;
export const selectFilteredTodos = createSelector(selectTodos, selectFilter, (todos, filter) => { 
    if (filter === "") {
        return todos;
    }
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
        todo.text.toLowerCase().includes(normalizedFilter)
    );
});

export const { addTodo, deleteTodo, editTodo, updateCurrentTodo } = slice.actions;

export default slice.reducer;