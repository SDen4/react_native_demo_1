import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../ui/AppCard';

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <AppCard style={styles.fromParent}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit'/>
            </AppCard>
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
    title: {
        fontSize: 20
    },
    fromParent: {
        marginBottom: 20,
    }
});
