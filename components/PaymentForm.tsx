import React, {useMemo, useState} from 'react';
import {Alert, StyleSheet, View} from "react-native";
import FormField from "./FormField";
import CustomSelectButton from "./buttons/CustomSelectButton";
import CustomButton from "./buttons/CustomButton";
import {checkPhoneNumber} from "../consts/regexFunctions";
import colors from "../consts/colors";

const PaymentForm = () => {
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState({
        amount: '',
        phoneNumber: '',
        paymentMethod: 0
    });
    const paymentMethods = useMemo(() => [
        {method: 1, description: 'P1X'},
        {method: 2, description: 'P3X'},
        {method: 3, description: 'P4X'},
    ], []);

    const handleAmount = (amount: string) => {
        setDatas({...datas, amount});
    };

    const handlePhoneNumber = (phoneNumber: string) => {
        setDatas({...datas, phoneNumber});
    };

    const handlePaymentMethod = (method: number) => {
        setDatas({...datas, paymentMethod: method});
    };

    const sleep = (delay: number) => new Promise((resolve) => {
        setTimeout(resolve, delay)
    });

    const checkFormValidity = () => {
        if (datas.amount === '' || datas.phoneNumber === '' || datas.paymentMethod === 0) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs');
            return false;
        }

        if (!checkPhoneNumber(datas.phoneNumber)) {
            Alert.alert('Erreur', 'Numéro de téléphone invalide');
            return false
        }

        return true;
    }

    const onFormSubmit = async () => {
        if (!checkFormValidity()) return;

        setLoading(true);

        try {
            await sleep(1500);

            setDatas({
                amount: '',
                phoneNumber: '',
                paymentMethod: 0
            });

            Alert.alert(
                'Lien de paiement envoyé',
                `Votre lien de paiement d'un montant ${datas.amount} € à été envoyé au : ${datas.phoneNumber}`);
        } catch (e) {
            console.error('Erreur lors de l\'envoi du lien de paiement', e);
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'envoi du lien de paiement');
        } finally {
            setLoading(false);
        }
    };

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
                    {paymentMethods.map((method, index) => (
                        <CustomSelectButton
                            key={index}
                            title={method.description}
                            value={method.method}
                            isSelected={datas.paymentMethod === method.method}
                            handlePress={handlePaymentMethod} />
                    ))}
                </View>
            </View>
            <CustomButton
                title={'Envoyer le lien de paiement'}
                gradientColors={[colors.midPurple, colors.darkPurple]}
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
        alignItems: 'center'
    },
    containerForm: {
        width: '100%',
        gap: 30
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
