import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from '../screens/AccountScreen';
import Messages from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyAccount" component={AccountScreen} />
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
}
