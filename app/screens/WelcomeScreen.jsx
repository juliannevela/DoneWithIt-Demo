import * as React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

import AppButton from '../components/Button';
import AppText from '../components/Text';
import GlobalStyles from '../config/GlobalStyles';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            blurRadius={1.5}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppText style={styles.tagline}>
                    Sell What You Don't Want
                </AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    backgroundColor={GlobalStyles.colors.primary}
                />
                <AppButton
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                    backgroundColor={GlobalStyles.colors.secondary}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    tagline: {
        paddingVertical: 40,
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        color: GlobalStyles.colors.black,
    },
});
