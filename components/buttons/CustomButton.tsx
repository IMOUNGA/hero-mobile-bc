import React from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    isLoading?: boolean;
    gradientColors?: [string, string];
}

const CustomButton = ({title, handlePress, isLoading, gradientColors}: CustomButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {gradientColors ? (
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.linearGradient}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="white"/>
                    ) : (
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
                    )}
                </LinearGradient>
            ) : (
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
    }
})

export default CustomButton;
