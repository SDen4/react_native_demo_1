import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => console.log('Pressed: ' + todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.container}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderColor: '#9e7a7a',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
});
