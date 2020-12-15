import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.MAIN_COLOR} title="Back" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        color={THEME.DANGER_COLOR}
                        title="Delete"
                        onPress={() => console.log('remove')}
                    />
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
