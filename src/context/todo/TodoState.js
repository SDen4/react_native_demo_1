import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null,
    };

    const { changeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async (title) => {
        const response = await fetch('https://react-native-todo-app-6842e-default-rtdb.firebaseio.com/todos.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title })
        });
        const data = await response.json();
        console.log('ID', data.name);
        dispatch({ type: ADD_TODO, title, id: data.name });
    }

    const removeTodo = (id) => {
        const todo = state.todos.find((item) => item.id === id);
        Alert.alert(
            'Delete task',
            `Are you sure to delete '${todo.title}'?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null);
                        dispatch({ type: REMOVE_TODO, id });
                    },
                },
            ],
            { cancelable: false }
        );
    };
    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const hideLoader = () => dispatch({type: HIDE_LOADER});

    const showError = error => dispatch({type: SHOW_ERROR, error});

    const clearError = () => dispatch({type: CLEAR_ERROR});


    return (
        <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
