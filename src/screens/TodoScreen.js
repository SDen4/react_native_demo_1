import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';

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
                {/* <Button title="Edit" onPress={() => setModal(true)} /> */}
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    {/* <Button color={THEME.MAIN_COLOR} title="Back" onPress={goBack} /> */}
                    <AppButton color={THEME.MAIN_COLOR} onPress={goBack}>
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    {/* <Button
                        color={THEME.DANGER_COLOR}
                        title="Delete"
                        onPress={() => onRemove(todo.id)}
                    /> */}
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        // width: '40%',
        //width = 1/3 of window
        // width: Dimensions.get('window').width / 3,
        //conditions
        width: Dimensions.get('window').width > 400 ? 175 : 100
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
