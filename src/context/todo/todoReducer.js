import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    CLEAR_ERROR,
    SHOW_ERROR,
    FETCH_TODOS,
} from '../types';

const handlers = {
    [ADD_TODO]: (state, { title }) => ({
        ...state,
        todos: [
            ...state.todos,
            {
                id: Date.now().toString(),
                title,
            },
        ],
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state,
        todos: state.todos.filter((item) => item.id !== id),
    }),
    [UPDATE_TODO]: (state, { title, id }) => ({
        ...state,
        todos: state.todos.map((item) => {
            if (item.id === id) {
                item.title = title;
            }
            return item;
        }),
    }),
    [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
    [HIDE_LOADER]: (state) => ({ ...state, loading: false }),
    [CLEAR_ERROR]: (state) => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
    [FETCH_TODOS]: (state, {todos}) => ({...state, todos}),
    DEFAULT: (state) => state,
};

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
