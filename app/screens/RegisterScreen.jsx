import React from 'react';
import * as Yup from 'yup';

import AppForm from '../components/forms/Form';
import AppFormField from '../components/forms/FormField';
import AppFormSubmit from '../components/forms/FormSubmit';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen() {
    return (
        <Screen>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    name="name"
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <AppFormSubmit title="Register" />
            </AppForm>
        </Screen>
    );
}
