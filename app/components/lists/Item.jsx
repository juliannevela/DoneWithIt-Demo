import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../Text';
import GlobalStyles from '../../config/GlobalStyles';

export default function ListItem({
    image,
    IconComponent,
    title,
    description,
    onPress,
    renderRightActions,
    showChevrons,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={GlobalStyles.colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {!showChevrons && IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.info}>
                        <AppText style={styles.title} lines={1}>
                            {title}
                        </AppText>
                        {description ? (
                            <AppText style={styles.description} lines={3}>
                                {description}
                            </AppText>
                        ) : null}
                    </View>
                    {showChevrons && (
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            color={GlobalStyles.colors.medium}
                        />
                    )}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.white,
        flexDirection: 'row',
        padding: 10,
    },
    description: {
        fontSize: 12,
        color: GlobalStyles.colors.medium,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    info: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
});
