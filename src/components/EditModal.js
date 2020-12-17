import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <View style={styles.buttons__wrapper}>
                        <Button title='Cancel' onPress={onCancel} color={THEME.DANGER_COLOR} />
                    </View>
                    <View style={styles.buttons__wrapper}>
                        <Button title='Save' color={THEME.MAIN_COLOR} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '90%',
    },
    buttons: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttons__wrapper: {
        width: '40%',
    },
});
