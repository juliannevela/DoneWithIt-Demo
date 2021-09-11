import React from 'react';
import { StyleSheet, View } from 'react-native';

import GlobalStyles from '../../config/GlobalStyles';

export default function ListItemSeparator() {
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: GlobalStyles.colors.light,
    },
});
