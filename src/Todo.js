import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Todo = ( {todo} ) => {
    return (
        <View style={styles.container}>
            <Text>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderColor: '#9e7a7a',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    },
})