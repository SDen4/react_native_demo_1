import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { THEME } from '../../theme';
import { AppTextBold } from '../ui/AppTextBold';

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    //recognize the platform and choose correct component for each of them
    const PlatformWrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;


    return (
        <PlatformWrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </PlatformWrapper>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: THEME.TEXT_COLOR_WHITE
    }
});
