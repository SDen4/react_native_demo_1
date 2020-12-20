import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now().toString(),
                        title: action.title,
                    },
                ],
            };
        case UPDATE_TODO:
            return { ...state, todos: state.todos.map(item => {
                if (item.id === action.id) {
                    item.title = action.title;
                };
                return item;
            })};
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter((item) => item.id !== action.id) };
        default:
            return state;
    }
};
