import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './app/navigation/AuthNavigator';

const Root = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Root.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Root.Screen name="Auth" component={AuthNavigator} />
            </Root.Navigator>
        </NavigationContainer>
    );
}
