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
  Alert,
} from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Login = ({ route }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("SA");
  const [callingCode, setCallingCode] = useState("966");
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const [userFounded, setUserFounded] = useState(false);
  const [msgCode, setmsgCodeCode] = useState(null);

  const navigation = useNavigation();
  const state = route.params ? route.params.state:""
  console.log("state", state);
  const onSelectCountry = (country) => {
    setCountryPickerVisible(false);
    setCallingCode(country.callingCode[0]);
    setCountryCode(country.cca2);
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const handleContinueClick = async () => {
    if (!phoneNumber) {
      Alert.alert('رجاءا ادخال رقم التلفون')
    } else {
      try {
        const response = await axios.post(`https://marriage-application.onrender.com/checkphone`, {
          "phonenumber": "+"+ callingCode + phoneNumber
        });

        if (response.status === 200) {
          console.log(response.data);
          if (response.data == true) {
            if (state === "ChangePhone") {
              Alert.alert('هذا الرقم مسجل لدينا')
            } else {
              navigation.navigate("LogInPage");

            }
          } else {
            navigation.navigate("LoginOTP", {
              msgCode: 121212,
              state: route.params.state,
              phoneNumber: '+' + callingCode + phoneNumber


            });
          }
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }



    }
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
            style={[styles.continueButton, { zIndex: 777777777777777 }]}
          >
            <Text style={styles.continueButtonText}>متابعة</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{state === "ChangePhone" ? "ادخل رقم الهاتف" : "ما هو رقم هاتفك ؟"}</Text>
          <View style={styles.phoneInput}>
            <TouchableOpacity onPress={toggleCountryPicker}>
              <CountryPicker
                countryCode={countryCode}
                // ... (your existing CountryPicker props)
                onSelect={onSelectCountry}
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
          {state !== "ChangePhone" &&
            <View style={styles.buttonBackground}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LogInPage')
                }}
              >
                <Text style={styles.buttonText}>لدي حساب بالفعل</Text>
              </TouchableOpacity>
            </View>
          }
          <Text style={styles.infoText}>
            {
              "من خلال المتابعة، فإنك توافق على تلقي المكالمات أو رسائل واتساب أو الرسائل النصية، بما في ذلك الوسائل الآلية، من التطبيق والشركات التابعة له على الرقم المقدم."
            }
          </Text>
        </View>
        {state !== "ChangePhone" &&
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
        }
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
