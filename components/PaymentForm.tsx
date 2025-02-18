import React, {useState} from 'react';
import {View} from "react-native";

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

    const handleAmount = (amount: string) => null;

    const handlePhoneNumber = (phoneNumber: string) => null;

    const handlePaymentMethod = (method: number) => null;

    const onFormSubmit = async () => null;

    return (
        <View>

        </View>
    );
};

export default PaymentForm;
