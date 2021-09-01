import { Platform } from 'react-native';

import colors from './colors';

export default {
    droidSafeArea: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    text: {
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
        color: colors.dark,
    },
    colors,
    inputWidth: {
        small: '30%',
        medium: '50%',
        large: '100%',
    },
};
