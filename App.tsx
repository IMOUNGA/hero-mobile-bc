import {StatusBar} from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HeroHeader from "./components/HeroHeader";
import PaymentForm from "./components/PaymentForm";

export default function App() {
    return (
        <SafeAreaProvider style={styles.appContainer}>
            <ImageBackground
                source={require('./assets/Background 390x908.png')}
                resizeMode={'cover'}
                style={styles.background}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <HeroHeader/>
                        <PaymentForm/>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <StatusBar style="light"/>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});
