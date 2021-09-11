import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

export default function Screen({ children, style }) {
    return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        flex: 1,
    },
});
