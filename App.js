import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

// const Root = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            {/* <Root.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Root.Screen name="Auth" component={AuthNavigator} />
            </Root.Navigator> */}
            <AppNavigator />
        </NavigationContainer>
    );
}
