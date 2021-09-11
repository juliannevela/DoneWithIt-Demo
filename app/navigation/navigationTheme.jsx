import { DefaultTheme } from '@react-navigation/native';
import GlobalStyles from '../config/GlobalStyles';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: GlobalStyles.colors.primary,
        background: GlobalStyles.colors.white,
    },
};
