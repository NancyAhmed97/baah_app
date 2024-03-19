import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("SA");
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const navigation = useNavigation();

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountryPickerVisible(false);
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const handleContinueClick = () => {
    navigation.navigate("LoginOTP");
  };

  const handlePreviousClick = () => {
    navigation.navigate("SplashTwo");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => handleContinueClick()}
            style={styles.continueButton}
          >
            <Text style={styles.continueButtonText}>متابعة</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{"ما هو رقم هاتفك ؟"}</Text>
          <View style={styles.phoneInput}>
            <TouchableOpacity onPress={toggleCountryPicker}>
              <CountryPicker
                countryCode={countryCode}
                // ... (your existing CountryPicker props)
              />
            </TouchableOpacity>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="رقم الجوال"
              keyboardType="numeric"
              onChangeText={(text) =>
                setPhoneNumber(text.replace(/[^0-9]/g, ""))
              }
              value={phoneNumber}
              maxLength={10} // Limit the phone number length
            />
          </View>
          <View style={styles.buttonBackground}>
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('LogInPage')
            }}
            >
              <Text style={styles.buttonText}>لدي حساب بالفعل</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.infoText}>
            {
              "من خلال المتابعة، فإنك توافق على تلقي المكالمات أو رسائل واتساب أو الرسائل النصية، بما في ذلك الوسائل الآلية، من التطبيق والشركات التابعة له على الرقم المقدم."
            }
          </Text>
        </View>
        <View style={styles.circularButtonsContainer}>
          <TouchableOpacity
            style={styles.circularButton}
            onPress={() => handlePreviousClick()}
          >
            <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.circularButton}
            onPress={() => handleContinueClick()}
          >
            <Ionicons name="arrow-forward" size={24} color="#ECB7B7" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: "black",
    fontSize: 26,
    fontFamily: "Cairo",
    fontWeight: "500",
    lineHeight: 170,
    textAlign: "center",
    marginBottom: 2,
  },
  continueButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  continueButtonText: {
    color: "#ECB7B7",
    fontSize: 16,
    fontFamily: "Cairo",
    fontWeight: "500",
  },
  phoneInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ECB7B7",
    marginBottom: 20,
    borderRadius: 17,
    paddingHorizontal: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    fontSize: 16,
  },
  infoText: {
    fontFamily: "Cairo",
    color: "#a7a7a7",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: "auto",
    width: "100%",
    writingDirection: "rtl",
    marginTop: 20,
  },
  circularButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  circularButton: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  bottomRightButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  buttonBackground: {
    width: "50%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: -20,
    marginBottom: 10,
    marginRight: -30,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#56a5ec",
    fontSize: 15,
    fontFamily: "Cairo",
    fontWeight: "600",
    lineHeight: 28,
  },
});

export default Login;
