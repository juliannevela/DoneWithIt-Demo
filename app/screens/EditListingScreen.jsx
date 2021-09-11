import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

// import useLocation from '../../hooks/useLocation';
import AppForm from '../components/forms/Form';
import AppFormField from '../components/forms/FormField';
import FormPicker from '../components/forms/FormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import AppFormSubmit from '../components/forms/FormSubmit';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import GlobalStyles from '../config/GlobalStyles';

const validationSchema = Yup.object().shape({
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().optional().label('Description'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    title: Yup.string().required().min(1).label('Title'),
    images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
    {
        backgroundColor: '#fc5c65',
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1,
    },
    {
        backgroundColor: '#fd9644',
        icon: 'car-side',
        label: 'Auto',
        value: 2,
    },
    {
        backgroundColor: '#fed330',
        icon: 'camera',
        label: 'Cameras',
        value: 3,
    },
    {
        backgroundColor: '#26de81',
        icon: 'google-controller',
        label: 'Games',
        value: 4,
    },
    {
        backgroundColor: '#2bcbba',
        icon: 'hanger',
        label: 'Clothing',
        value: 5,
    },
    {
        backgroundColor: '#45aaf2',
        icon: 'basketball',
        label: 'Sports',
        value: 6,
    },
    {
        backgroundColor: '#4b7bec',
        icon: 'headphones',
        label: 'Movies & Music',
        value: 7,
    },
    {
        backgroundColor: '#9c67e3',
        icon: 'book-open-variant',
        label: 'Books',
        value: 8,
    },
    {
        backgroundColor: GlobalStyles.colors.medium,
        icon: 'window-maximize',
        label: 'Other',
        value: 9,
    },
];

export default function ListingEditScreen() {
    // const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    category: null,
                    description: '',
                    price: '',
                    title: '',
                    images: [],
                    // location,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    autoCapitalize="words"
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="decimal-pad"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={GlobalStyles.inputWidth.small}
                />
                <FormPicker
                    items={categories}
                    name="category"
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    numberOfColumns={3}
                    width={GlobalStyles.inputWidth.medium}
                />
                <AppFormField
                    maxLength={255}
                    multiLine
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <AppFormSubmit title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    },
});
