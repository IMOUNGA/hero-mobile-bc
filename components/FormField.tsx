import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";

interface FormFieldProps {
    value: string;
    placeholder: string;
    handleChangeText: (text: string) => void;
    keyboardType?: 'default' | 'numeric' | 'phone-pad';
}

const FormField = ({value, placeholder, handleChangeText, keyboardType}: FormFieldProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType={keyboardType ? keyboardType : 'default'}
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                value={value}
                onChangeText={handleChangeText}
                returnKeyType={'done'}
                style={styles.textInput} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    textInput: {
        width: '100%',
        height: 55,
    }
});

export default FormField;
