import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { Item, Separator } from '../components/lists';
import { Screen, Icon } from '../components';

import colors from '../config/colors';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
    },
];

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Item
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
                        <Item
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
            <Item
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor={colors.logout} />
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
        backgroundColor: colors.white,
    },
    screen: {
        backgroundColor: colors.light,
    },
});
