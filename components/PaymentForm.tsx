import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import FormField from "./FormField";
import CustomSelectButton from "./buttons/CustomSelectButton";
import CustomButton from "./buttons/CustomButton";

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

    const handlePhoneNumber = (phoneNumber: string) => {
        setDatas({...datas, phoneNumber: phoneNumber});
    };

    const handlePaymentMethod = (method: number) => {
        setDatas({...datas, paymentMethod: method});
    };

    const onFormSubmit = async () => null;

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <FormField
                    value={datas.amount}
                    placeholder={'Montant (€)'}
                    keyboardType={'numeric'}
                    handleChangeText={handleAmount} />
                <FormField
                    value={datas.phoneNumber}
                    placeholder={'Numéro de téléphone'}
                    keyboardType={'phone-pad'}
                    handleChangeText={handlePhoneNumber} />
                <View style={styles.containerPaymentMethods}>
                    {paymentMethods.map((method) => (
                        <CustomSelectButton
                            title={method.description}
                            value={method.method}
                            isSelected={datas.paymentMethod === method.method}
                            handlePress={handlePaymentMethod} />
                    ))}
                </View>
            </View>
            <CustomButton
                title={'Envoyer le lien de paiement'}
                gradientColors={['#9f81d3', '#6d24bd']}
                isLoading={loading}
                handlePress={onFormSubmit} />
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
        gap: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
    },
    containerPaymentMethods: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
    }
});

export default PaymentForm;
