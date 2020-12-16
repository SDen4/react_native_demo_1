import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppCard = (props) => <View style={styles.default}>{props.children}</View>;

const styles = StyleSheet.create({
    default: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000', //only for iOS!
        shadowRadius: 2, //only for iOS!
        shadowOpacity: 0.3, //only for iOS!
        shadowOffset: { width: 2, height: 2 }, //only for iOS!
        elevation: 7, //only for Android
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});
