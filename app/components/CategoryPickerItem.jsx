import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppText from './Text';
import Icon from './Icon';

export default function CategoryPickerItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    name={item.icon}
                    size={80}
                    backgroundColor={item.backgroundColor}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        width: '33%',
    },
    label: {
        marginTop: 5,
        textAlign: 'center',
    },
});
