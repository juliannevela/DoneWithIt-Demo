import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Text from './Text';
import GlobalStyles from '../config/GlobalStyles';

export default function Button({ title, onPress, backgroundColor }) {
    return (
        <TouchableOpacity
            style={[styles.button, backgroundColor && { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: GlobalStyles.colors.primary,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        ...GlobalStyles.text,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: GlobalStyles.colors.white,
    },
});
