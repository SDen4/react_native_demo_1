import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
    const [todoId, setTodoId] = useState('2');
    const [todos, setTodos] = useState([
        { id: '1', title: 'Выучить React Native' },
        { id: '2', title: 'Написать приложение' },
    ]);

    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
            },
        ]);
    };

    const removeTodo = (id) => {
        const deleteTitle = todos.find( item => item.id === id)
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
                        setTodoId(null);
                        setTodos((prev) => prev.filter((item) => item.id !== id));
                    }
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
        content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo} />;
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
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
