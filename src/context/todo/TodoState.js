import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
    FETCH_TODOS,
} from '../types';
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
        const response = await fetch(
            'https://react-native-todo-app-6842e-default-rtdb.firebaseio.com/todos.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title }),
            }
        );
        const data = await response.json();
        console.log('ID', data.name);
        dispatch({ type: ADD_TODO, title, id: data.name });
    };

    const fetchTodos = async () => {
        showLoader();
        clearError();
        try {
            const response = await fetch(
                'https://react-native-todo-app-6842e-default-rtdb.firebaseio.com/todos.json',
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const data = await response.json();
            const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
            dispatch({ type: FETCH_TODOS, todos });
        } catch (e) {
            // showError("Something's wrong...");
            console.log(e);
        } finally {
            hideLoader();
        }
    };

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
                    onPress: async () => {
                        changeScreen(null);
                        await fetch(`https://react-native-todo-app-6842e-default-rtdb.firebaseio.com/todos/${id}.json`, {
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'}
                        });
                        dispatch({ type: REMOVE_TODO, id });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const updateTodo = async (id, title) => {
        clearError();
        try {
            await fetch(`https://react-native-todo-app-6842e-default-rtdb.firebaseio.com/todos/${id}.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title }),
            });
            dispatch({ type: UPDATE_TODO, id, title });
        } catch(e) {
            showError("Something's wrong...");
            console.log(e);
        }
    };

    const showLoader = () => dispatch({ type: SHOW_LOADER });

    const hideLoader = () => dispatch({ type: HIDE_LOADER });

    const showError = (error) => dispatch({ type: SHOW_ERROR, error });

    const clearError = () => dispatch({ type: CLEAR_ERROR });

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
