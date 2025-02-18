import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState({
        amount: '',
        phoneNumber: '',
        paymentMethod: 0
    });
    const paymentMethods = [
        {method: 1, description: 'P1X'},
        {method: 2, description: 'P3X'},
        {method: 3, description: 'P4X'},
    ];

    const handleAmount = (amount: string) => {
        setDatas({...datas, amount: amount});
    };

    const handlePhoneNumber = (phoneNumber: string) => null;

    const handlePaymentMethod = (method: number) => null;

    const onFormSubmit = async () => null;

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        keyboardType='numeric'
                        placeholder={'Montant (€)'}
                        value={datas.amount}
                        onChangeText={handleAmount}
                        style={styles.textInput} />
                </View>

            </View>
            <View>
                <Text style={{color: '#fff'}}>Button Valid Form</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'black',
    },
    containerForm: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
    },
    textInputContainer: {
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

export default PaymentForm;
