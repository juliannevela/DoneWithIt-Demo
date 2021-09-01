import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ListingsScreen() {
    return <View style={styles.container}>Listings</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
