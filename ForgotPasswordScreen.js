import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
const ForgotPasswordScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");

    const handleResetPassword = async() => {
        // Basic phone number validation (customize according to your needs)
        const phoneNumberRegex = /^\d{10}$/; // Assuming a valid phone number has 10 digits
        if (!phoneNumber) {
            setPhoneNumberError("Please enter a valid phone number");
            return;
        }else{
            try {
                const response = await axios.post(`https://marriage-application.onrender.com/checkphone`,{
                    "phonenumber":phoneNumber

                });

                if (response.status === 200) {
                    console.log(response.data);
                  if (response.data === true) {
                    navigation.navigate("PasswordResetConfirmation");
                  } else {
                Alert.alert('الرقم خطأ')
                  }
                }
              } catch (error) {
                console.error('Error fetching data: ', error);
              }    
            
            }

        // TODO: Implement logic to send a password reset code to the user's phone number
        // For now, you can navigate to a confirmation page or display a message
        // navigation.navigate("PasswordResetConfirmation");
    };
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View style={styles.circularButtonsContainer}>

                <TouchableOpacity
                    style={styles.circularButton}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
                </TouchableOpacity>
            </View>           
                 <View style={styles.container}>
                <Text style={styles.title}>نسيت كلمة المرور؟</Text>
                <Text style={styles.subtitle}>
                    أدخل رقم الهاتف الخاص بك لإعادة تعيين كلمة المرور
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="رقم الهاتف"
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                        setPhoneNumberError("");
                    }}
                />
                {phoneNumberError && (
                    <Text style={styles.errorText}>{phoneNumberError}</Text>
                )}
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={handleResetPassword}
                >
                    <Text style={styles.resetButtonText}>إعادة تعيين كلمة المرور</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    resetButton: {
        backgroundColor: "#56a5ec",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    resetButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    circularButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft:10
    },

    circularButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        borderWidth: 2,
        borderColor: "#F2F2F2",
    },
});