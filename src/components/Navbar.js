import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppText } from './ui/AppText';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <AppText style={styles.text}>{props.title}</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: THEME.TEXT_COLOR_WHITE,
        fontSize: 24,
    },
});
