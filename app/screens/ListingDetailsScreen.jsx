import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/Item';
import GlobalStyles from '../config/GlobalStyles';
import AppText from '../components/Text';

export default function ListingDetails({ route }) {
    const listing = route.params;

    return (
        <View style={styles.container}>
            <Image source={listing.image} style={styles.image} />
            <View style={styles.details}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
            </View>
            <ListItem
                image={require('../assets/juli.jpeg')}
                title="Nessi Skye"
                description="5 Listings"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    details: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        color: GlobalStyles.colors.secondary,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: GlobalStyles.colors.black,
    },
});
