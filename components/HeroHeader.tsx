import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const HeroHeader = () => {
    return (
        <View style={styles.imageCo}>
            <Image
                source={require('../assets/Hero Image 336x129.png')}
                resizeMode={'contain'}
                style={styles.imageTitle} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageCo: {
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageTitle: {
        width: 150,
    }
});

export default HeroHeader;
