import React from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GlobalStyles from '../../config/GlobalStyles';

export default function ViewImage() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                style={styles.backBtn}
                name="close"
                size={35}
                color={GlobalStyles.colors.white}
            />
            <MaterialCommunityIcons
                style={styles.deleteBtn}
                name="trash-can-outline"
                size={35}
                color={GlobalStyles.colors.white}
            />
            <Image
                style={styles.image}
                resizeMode={'contain'}
                source={require('../../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.black,
        marginTop: Platform.OS === 'android' ? 25 : 0,
    },
    backBtn: {
        position: 'absolute',
        top: 30,
        left: 20,
    },
    deleteBtn: {
        position: 'absolute',
        top: 30,
        right: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
