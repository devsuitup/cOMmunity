import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from "react-native-elements";

import Colors from '../../constants/Colors';
import { touch } from 'redux-form';

const TextInputWithValidations = ({
    input,
    containerStyle,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <View style={containerStyle}>
        <FormLabel fontFamily="montserrat" labelStyle={{color: Colors.$darkBlueColor}} >
            {label}
        </FormLabel>
        <FormInput 
            {...input}
            {...custom}
        />
        {error && touched && 
            <FormValidationMessage fontFamily="montserrat" labelStyle={{color: Colors.$redColor}} >
                {error}
            </FormValidationMessage>
        }

    </View>
);

export default TextInputWithValidations;
