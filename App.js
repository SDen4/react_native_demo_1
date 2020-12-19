import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './src/theme';

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });
}

export default function App() {
    const [isReady, setIsReady] = useState(false); //state for async load of the app
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([{ id: '1', title: 'Выучить React Native' }]);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApp}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        );
    }

    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
            },
        ]);
    };

    const updateTodo = (id, title) => {
        setTodos((oldState) =>
            oldState.map((item) => {
                if (item.id === id) {
                    item.title = title;
                }
                return item;
            })
        );
    };

    const removeTodo = (id) => {
        const deleteTitle = todos.find((item) => item.id === id);
        //Alert - works on both Android and iOS
        Alert.alert(
            'Delete task',
            `Are you sure to delete "${deleteTitle.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null); // return to main screen after deletion & to prevent the error of title
                        setTodos((prev) => prev.filter((item) => item.id !== id));
                    },
                },
            ],
            { cancelable: false }
        );
    };

    let content = (
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
    );

    if (todoId) {
        const selectedTodo = todos.find((todo) => todo.id === todoId);
        content = (
            <TodoScreen
                onRemove={removeTodo}
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
                onSave={updateTodo}
            />
        );
    }

    return (
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>{content}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 10,
    },
});
