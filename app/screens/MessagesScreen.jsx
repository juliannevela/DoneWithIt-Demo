import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function MessagesScreen() {
    return <View style={styles.container}>Messages</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
