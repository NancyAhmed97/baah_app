import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { useSelector } from 'react-redux';

const LoginOTP = ({ route }) => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(15); // 15 seconds countdown
  const navigation = useNavigation();
  const phoneNumber = route.params?.phoneNumber
  const msgCode = route.params?.msgCode
  const state = route.params?.state
	const userinfo = useSelector((state) => state);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleDigitChange = (index, value) => {
    const updatedDigits = [...digits];
    updatedDigits[index] = value;

    if (value && index < digits.length - 1) {
      refs[index + 1]?.current?.focus();
    }
    setDigits(updatedDigits);
    const strNumber = arrayToNumber(updatedDigits)
    if (strNumber.toString().length == 6) {
      Keyboard.dismiss();
    }


  };

  const handleSubmit = () => {
    Alert.alert('ldkjdvfs')
    // navigation.navigate("Splashsc");
    // const otpCode = digits.join("");
    // console.log("OTP Code:", otpCode);
  };

  const handleTextPress = () => {
    if (countdown == 0) {
      console.log("Text pressed", countdown);

    }
  };

  const handlePreviousClick = () => {
    navigation.goBack();
  };
  function arrayToNumber(arr) {
    // Join the array of digits into a string
    const numString = arr.join('');

    // Convert the string to a number
    const number = parseInt(numString, 10);
    return number;
  }
  const handleNextClick =async () => {


    const number = arrayToNumber(digits);
    console.log(msgCode === number);
    if (msgCode === number) {
      if (state === "ChangePhone") {

        try {
          const response = await axios.post(`https://marriage-application.onrender.com/changephone?id=${userinfo.user.userArray.id}&new_phone=${phoneNumber}`);
  
          if (response.status === 200) {
            console.log(response.data);
            if (response.data === true) {
              Alert.alert('تم تغيير الرقم بنجاح')
              navigation.navigate('MainHome');
            }
          }
        } catch (error) {
          console.error('Error fetching data: ',error.response.data);
        }
      } else {

        navigation.navigate("GeneralQ", {
          phoneNumber: phoneNumber
        });
      }


    } else {
      Alert.alert('الرمز غير صحيح')
    }


    // if(state==="ChangePhone"){
    //   navigation.navigate('MainHome');
    //     }else{
    //   navigation.navigate("GeneralQ",{
    //     phoneNumber:phoneNumber
    //   });
    // }

  };

  const refs = Array.from({ length: digits.length }, () => React.createRef());

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>
            أدخل الرمز المكون من 4 أرقام الذي تم إرساله إلي رقمك:
          </Text>
          {digits.map((value, index) => (
            <TextInput
              key={index}
              ref={refs[index]}
              style={styles.digitInput}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleDigitChange(index, text)}
              onSubmitEditing={() =>
                index === digits.length - 1 ? handleSubmit() : null
              }
            />
          ))}
        </View>

          <Text style={styles.resendText}>
            لم أتلق الرمز ({countdown} ثانية)
          </Text>
        {countdown == 0 &&
          <TouchableOpacity onPress={handleTextPress}>
            <Text style={styles.resendText}>اعادة ارسال الرمز</Text>

          </TouchableOpacity>
        }
      </ScrollView>

      <View style={styles.circularButtonsContainer}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={handlePreviousClick}
        >
          <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={handleNextClick}
        >
          <Ionicons name="arrow-forward" size={24} color="#ECB7B7" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    marginTop: 190,
  },
  digitInput: {
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#ECB7B7",
    marginHorizontal: 5,
  },
  circularButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
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
  headerText: {
    width: 321,
    left: 36,
    top: 60,
    position: "absolute",
    textAlign: "center",
    color: "black",
    fontSize: 26,
    fontFamily: "Cairo",
    fontWeight: "500",
    lineHeight: 33,
    marginTop: -170,
  },
  resendText: {
    textAlign: "center",
    color: "#ECB7B7",
    fontSize: 15,
    fontFamily: "Cairo",
    fontWeight: "400",
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default LoginOTP;
