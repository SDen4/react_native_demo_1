import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
    const [todos, setTodos] = useState([
        {id: 1, title: 'test'},
        {id: 2, title: 'test'},
        {id: 3, title: 'test'},
        {id: 4, title: 'test'},
        {id: 5, title: 'test'},
        {id: 6, title: 'test'},
        {id: 7, title: 'test'},
        {id: 8, title: 'test'},
        {id: 9, title: 'test'},
        {id: 10, title: 'test'},
        {id: 12, title: 'test'},
        {id: 13, title: 'test'},
        {id: 14, title: 'test'},
        {id: 15, title: 'test'},
        {id: 16, title: 'test'},
        {id: 17, title: 'test'},
    ]);

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
        <View style={styles.main}>
            <Navbar title="Todo App" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <ScrollView>
                    {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});
