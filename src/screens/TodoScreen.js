import React, { useState, useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import { THEME } from '../theme';
import { AppCard } from '../components/ui/AppCard';
import { EditModal } from '../components/EditModal';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext);
    const { todoId, changeScreen } = useContext(ScreenContext);

    const todo = todos.find((item) => item.id === todoId);

    const [modal, setModal] = useState(false);

    // Use async-await for pretend bug of changing value after loading, now is correct: change value after loading
    const saveHandler = async (title) => {
        await updateTodo(todo.id, title);
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
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.MAIN_COLOR} onPress={() => changeScreen(null)}>
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width > 400 ? 175 : 100,
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
