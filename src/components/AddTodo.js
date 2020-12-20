import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({ onSubmit }) => {
    const [todoText, setTodoText] = useState('');

    const pressButton = () => {
        if (todoText.trim().length > 2) {
            onSubmit(todoText);
            setTodoText('');
            Keyboard.dismiss();
        } else {
            Alert.alert('A new task can not be empty!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='type here new task'
                onChangeText={setTodoText}
                value={todoText}
                autoCorrect={true}
                autoCapitalize='none'
                keyboardType='default'
            />
            <AntDesign.Button onPress={pressButton} name='pluscircleo'>
                Add
            </AntDesign.Button>
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
        width: '75%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
    },
});
