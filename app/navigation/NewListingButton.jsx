import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GlobalStyles from '../config/GlobalStyles';

export default function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    size={40}
                    color={GlobalStyles.colors.white}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary,
        borderColor: GlobalStyles.colors.white,
        borderRadius: 35,
        borderWidth: 8,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70,
    },
});
