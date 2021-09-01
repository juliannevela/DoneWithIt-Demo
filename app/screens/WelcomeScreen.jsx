import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Platform,
    Image,
} from 'react-native';

import { Button, Text } from '../components';
import GlobalStyles from '../config/GlobalStyles';

export default function WelcomeScreen() {
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
                <Text style={styles.tagline}>Sell What You Don't Want</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    onPress={() => console.log('Login')}
                    backgroundColor={GlobalStyles.colors.primary}
                />
                <Button
                    title="Register"
                    onPress={() => console.log('Register')}
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
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    tagline: {
        paddingVertical: 20,
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        color: GlobalStyles.colors.black,
    },
});
