import React, {useState, useContext} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Navbar } from './components/Navbar';
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
    const { todoId, changeScreen } = useContext(ScreenContext);
    // const [todoId, setTodoId] = useState(null);
    // const [todos, setTodos] = useState([]);

    // const removeTodo = (id) => {
    //     const deleteTitle = todos.find((item) => item.id === id);
    //     //Alert - works on both Android and iOS
    //     Alert.alert(
    //         'Delete task',
    //         `Are you sure to delete "${deleteTitle.title}"?`,
    //         [
    //             {
    //                 text: 'Cancel',
    //                 style: 'cancel',
    //             },
    //             {
    //                 text: 'Delete',
    //                 style: 'destructive',
    //                 onPress: () => {
    //                     setTodoId(null); // return to main screen after deletion & to prevent the error of title
    //                     setTodos((prev) => prev.filter((item) => item.id !== id));
    //                 },
    //             },
    //         ],
    //         { cancelable: false }
    //     );
    // };

    let content = (
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={changeScreen} />
    );

    if (todoId) {
        const selectedTodo = todos.find((todo) => todo.id === todoId);
        content = (
            <TodoScreen
                onRemove={removeTodo}
                goBack={() => changeScreen(null)}
                todo={selectedTodo}
                onSave={updateTodo}
            />
        );
    }

    return (
        <View>
            <Navbar title='Todo App' />
            <View style={styles.container}>{content}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 10,
    },
});
