import React from 'react';
import { Text } from 'react-native';

import GlobalStyles from '../config/GlobalStyles';

export default function AppText({ children, style, ...props }) {
    return (
        <Text style={[GlobalStyles.text, style]} numberOfLines={props.lines}>
            {children}
        </Text>
    );
}
