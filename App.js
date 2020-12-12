import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello test!!!</Text>

            {/* inline style */}
            <Text style={ {color: 'white'} }>Second row</Text>
            <Text style={styles.third}>The third row</Text>
            <StatusBar style="auto" />
        </View>
    );
}

//style using /StyleSheet' component and its method 'create'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    third: {
        fontSize: 24,
        color: 'brown',
    }
});
