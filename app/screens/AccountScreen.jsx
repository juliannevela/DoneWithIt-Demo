import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function AccountScreen() {
    return <View style={styles.container}>Account</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
