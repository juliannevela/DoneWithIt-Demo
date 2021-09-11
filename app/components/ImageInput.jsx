import React, { useEffect } from 'react';
import {
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    View,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Icon } from './';
import GlobalStyles from '../config/GlobalStyles';

export default function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert('You need to enable permission to access the library.');
    };

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert(
                'Delete',
                'Are you sure you want to delete this image?',
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' },
                ]
            );
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
                {!imageUri && (
                    <Icon
                        name="camera"
                        size={80}
                        backgroundColor={null}
                        iconColor={GlobalStyles.colors.medium}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        overflow: 'hidden',
        width: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
