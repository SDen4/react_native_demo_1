import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
    // const [todos, setTodos] = useState([
    //     { id: '1', title: 'test' },
    //     { id: '2', title: 'test' },
    //     { id: '3', title: 'test' },
    //     { id: '4', title: 'test' },
    //     { id: '5', title: 'test' },
    //     { id: '6', title: 'test' },
    //     { id: '7', title: 'test' },
    //     { id: '8', title: 'test' },
    //     { id: '9', title: 'test' },
    //     { id: '10', title: 'test' },
    //     { id: '12', title: 'test' },
    //     { id: '13', title: 'test' },
    //     { id: '14', title: 'test' },
    //     { id: '15', title: 'test' },
    //     { id: '16', title: 'test' },
    //     { id: '17', title: 'test' },
    //     { id: '18', title: 'test' },
    //     { id: '19', title: 'test' },
    //     { id: '20', title: 'test' },
    //     { id: '21', title: 'test' },
    //     { id: '22', title: 'test' },
    //     { id: '23', title: 'test' },
    //     { id: '24', title: 'test' },
    //     { id: '25', title: 'test' },
    //     { id: '26', title: 'test' },
    //     { id: '27', title: 'Last' },
    // ]);

    const [todos, setTodos] = useState([])

    const addTodo = title => {
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            },
        ]);
    };

    const removeTodo = id => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    return (
        <View style={styles.main}>
            <Navbar title="Todo App" />
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={todos}
                    renderItem={({ item }) => {
                        return <Todo todo={item} onRemove={removeTodo}/>
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        // flex: 1,
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});
