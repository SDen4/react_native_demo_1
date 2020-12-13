import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
            <Button title='Add' style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomColor: '#9e7a7a',
        borderBottomWidth: 2,
    },
    button: {}
});
