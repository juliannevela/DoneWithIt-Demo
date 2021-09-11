import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ListItem from '../components/lists/Item';
import Separator from '../components/lists/Separator';
import Screen from '../components/Screen';
import Icon from '../components/Icon';

import GlobalStyles from '../config/GlobalStyles';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: GlobalStyles.colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: GlobalStyles.colors.secondary,
        },
    },
];

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require('../assets/nessima.png')}
                    title="Nessima Skye"
                    description="hello@juliannevela.dev"
                    onPress={() => console.log('Edit Profile')}
                    style={styles.profileCard}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => console.log(item.title)}
                        />
                    )}
                    ItemSeparatorComponent={Separator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor={GlobalStyles.colors.logout}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    profileCard: {
        marginTop: 20,
        padding: 20,
        backgroundColor: GlobalStyles.colors.white,
    },
    screen: {
        backgroundColor: GlobalStyles.colors.light,
    },
});
