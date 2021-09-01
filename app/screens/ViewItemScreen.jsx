import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ViewItemScreen() {
    return <View style={styles.container}>View Item</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
