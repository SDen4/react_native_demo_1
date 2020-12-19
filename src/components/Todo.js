import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { THEME } from '../theme';
import { AppText } from './ui/AppText';

export const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.container}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderColor: THEME.MAIN_COLOR,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
    }
});
