import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';

export const EditModal = ({ value, visible, onCancel, onSave }) => {
    const [editedTitle, setEditedTitle] = useState(value);

    const saveHandler = () => {
        if (editedTitle.trim().length < 3) {
            Alert.alert(
                'Error!',
                `Minimum task's lenght couldn't be less than 3 lettets. Now length is ${
                    editedTitle.trim().length
                } letter(s)`
            );
        } else {
            onSave(editedTitle);
        }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.wrapper}>
                <TextInput
                    value={editedTitle}
                    onChangeText={setEditedTitle}
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <View style={styles.buttons__wrapper}>
                        {/* <Button title="Cancel" onPress={onCancel} color={THEME.DANGER_COLOR} /> */}
                        <AppButton color={THEME.DANGER_COLOR} onPress={onCancel}>
                            Cancel
                        </AppButton>
                    </View>
                    <View style={styles.buttons__wrapper}>
                        {/* <Button title="Save" color={THEME.MAIN_COLOR} onPress={saveHandler} /> */}
                        <AppButton onPress={saveHandler}>
                            Save
                        </AppButton>
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
