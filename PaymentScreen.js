import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'react-native-circle-checkbox';

const PaymentScreen = ({ route }) => {
    const { selectedPlan } = route.params || {};
    const navigation = useNavigation();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [isSelected, setSelected] = useState('');

    const handleSelectPlan = () => {
        navigation.navigate('');
    };

    const handleNextClick = () => {
        navigation.navigate('SubScription1');
    };

    const handlePaymentOptionSelect = (option) => {
        setSelectedPaymentMethod(option);
        setSelected(option); // تحديث الحالة للاختيار الحالي
    };

    const handlePayment = () => {
        // هنا يمكنك إضافة الاكتفاء بالطريقة المحددة للدفع
        navigation.navigate('');
    };

    // تحديد السعر بناءً على الاشتراك المختار
    let subscriptionPrice = "";
    switch (selectedPlan) {
        case "ذهبي":
            subscriptionPrice = 19.99;
            break;
        case "فضي":
            subscriptionPrice = 9.99;
            break;
        case "رمادي":
            subscriptionPrice = 29.99;
            break;
        default:
            subscriptionPrice = 0;
    }
    const tax = 2.99;
    const totalPrice = subscriptionPrice + tax;
    const formattedTotalPrice = totalPrice.toFixed(2);
    // تحديد نص زر الدفع بناءً على الطريقة المختارة للدفع
    let paymentButtonText = "الدفع";
    if (selectedPaymentMethod) {
        paymentButtonText = ` الدفع عبر ${selectedPaymentMethod}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.circularButtonsContainer}>
                <TouchableOpacity
                    style={styles.circularButton}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circularButton} onPress={handleNextClick}>
                    <Ionicons name="arrow-forward" size={24} color="#ECB7B7" />
                </TouchableOpacity>

            </View>
            <Text style={styles.paymentHeader}>  اختر وسيلة الدفع </Text>
            <View style={styles.paymentOptions}>
                <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentOptionSelect('بطاقة الائتمان')}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={isSelected === 'بطاقة الائتمان'} // تحديد الاختيار إذا كان محددًا
                            onToggle={(checked) => handlePaymentOptionSelect(checked ? 'بطاقة الائتمان' : '')} // تحديث الحالة عند تغيير الاختيار
                            innerSize={24}
                            outerSize={28}
                            outerColor="#ECB7B7"
                            innerColor="#ECB7B7"
                            style={styles.checkbox}
                        />
                        <Text style={styles.paymentOptionText}>بطاقة الائتمان</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentOptionSelect('PayPal')}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={isSelected === 'PayPal'}
                            onToggle={(checked) => handlePaymentOptionSelect(checked ? 'PayPal' : '')}
                            innerSize={24}
                            outerSize={28}
                            outerColor="#ECB7B7"
                            innerColor="#ECB7B7"
                            style={styles.checkbox}
                        />
                        <Text style={styles.paymentOptionText}>        PayPal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentOptionSelect('Apple Pay')}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={isSelected === 'Apple Pay'}
                            onToggle={(checked) => handlePaymentOptionSelect(checked ? 'Apple Pay' : '')}
                            innerSize={24}
                            outerSize={28}
                            outerColor="#ECB7B7"
                            innerColor="#ECB7B7"
                            style={styles.checkbox}
                        />
                        <Text style={styles.paymentOptionText}>  Apple Pay</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.paymentDetails}>
                <Text style={styles.paymentText}>نوع الاشتراك : {selectedPlan}</Text>
                <Text style={styles.paymentText}>سعر الاشتراك : ${subscriptionPrice}</Text>
                <Text style={styles.paymentText}>الضريبة  : ${tax}</Text>
                <Text style={styles.paymentText}>الأجمالي  : ${formattedTotalPrice}</Text>
            </View>
            <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment()}>
                <Text style={styles.paymentButtonText}>{paymentButtonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    paymentHeader: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Cairo",
    },
    paymentDetails: {
        marginBottom: 10,
        marginTop: 90,
        alignItems: "flex-end",
        fontFamily: "Cairo",
    },
    paymentText: {
        fontSize: 18,
        color: "#666",
        marginTop: 10,
        textAlign: "center",
        marginBottom: 10,
        fontFamily: "Cairo",
        marginRight: -190,
    },
    paymentOptions: {
        marginTop: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        width: "90%",
    },
    paymentOption: {
        backgroundColor: "white",
        borderColor: "#ECB7B7",
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    paymentOptionText: {
        color: "black",
        alignItems: "center",
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Cairo",
        marginLeft: 200,
    },
    paymentButton: {
        marginTop: 50,
        backgroundColor: "#ECB7B7",
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
    },
    paymentButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Cairo",
    },
    circularButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -45,
        marginBottom: 3,
        marginHorizontal: 20,
        width:"100%",
        paddingHorizontal:22
    },
    circularButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#F2F2F2',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    checkbox: {
        marginRight: 10,
    },
});

export default PaymentScreen;