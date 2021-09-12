import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import AppText from './Text';
import GlobalStyles from '../config/GlobalStyles';

export default function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image source={image} style={styles.cardImage} />
                <View style={styles.details}>
                    <AppText style={styles.title} lines={1}>
                        {title}
                    </AppText>
                    <AppText style={styles.subTitle} lines={3}>
                        {subTitle}
                    </AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: GlobalStyles.colors.white,
        marginBottom: 10,
        marginVertical: 10,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    details: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.secondary,
    },
});
