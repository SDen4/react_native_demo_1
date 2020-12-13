import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title: title,
            },
        ]);
    };

    return (
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <View>
                    {todos.map(todo => {
                        return <Text key={todo.id}>{todo.title}</Text>
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
