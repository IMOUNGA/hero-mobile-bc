import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../../consts/colors";

interface CustomSelectButtonProps {
    title: string;
    value: number;
    handlePress: (method: number) => void;
    isSelected: boolean;
}

const CustomSelectButton = ({title, handlePress, value, isSelected}: CustomSelectButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.container, {backgroundColor: isSelected ? colors.lightPurple : '#fff'}]}
            onPress={() => handlePress(value)}>
            <Text style={[styles.textStyle, {color: isSelected ? '#fff' : '#000'}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 53,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textStyle: {
        fontWeight: 'bold',
    }
})

export default CustomSelectButton;
