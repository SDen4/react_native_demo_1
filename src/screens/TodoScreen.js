import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    //open or close modal for edit task
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    };

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={styles.fromParent}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <Button title="Edit" onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button color={THEME.MAIN_COLOR} title="Back" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        color={THEME.DANGER_COLOR}
                        title="Delete"
                        onPress={() => onRemove(todo.id)}
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
        fontSize: 20,
    },
    fromParent: {
        marginBottom: 20,
    },
});
