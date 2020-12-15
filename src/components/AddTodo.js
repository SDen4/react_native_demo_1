import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [todoText, setTodoText] = useState('');

    const pressButton = () => {
        if (todoText.trim()) {
            onSubmit(todoText);
            setTodoText('');
        } else {
            Alert.alert('A new task can not be empty!')
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='type here new task'
                // onChangeText={text => setTodoText(text)}
                // the short variant bottom - for onChangeText because of one argument (text)
                onChangeText={setTodoText}
                value={todoText}
                // correct the syntax of the input words
                autoCorrect={true}
                // manage the capital letters
                autoCapitalize='none'
                // type of keyboard
                keyboardType='default'
            />
            <Button title='Add' color='#9e7a7a' onPress={pressButton} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomColor: '#9e7a7a',
        borderBottomWidth: 2,
    }
});
