import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = ( {onSubmit} ) => {
    const pressButton = () => {
        onSubmit('test todo');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button title="Add" style={styles.button} onPress={pressButton} />
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
        width: '70%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomColor: '#9e7a7a',
        borderBottomWidth: 2,
    },
    button: {},
});
