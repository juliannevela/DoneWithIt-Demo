import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import EditListingScreen from '../screens/EditListingScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Listings" component={ListingsScreen} />
            <Tab.Screen name="ListingEdit" component={EditListingScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}
