import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color="#9e7a7a" title="Back" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button color="orange" title="Delete" onPress={() => console.log('remove')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '40%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
