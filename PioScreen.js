import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import axios from "axios";
import { useDispatch } from "react-redux";
import { userMethod } from "./Redux/user";

const PioScreen = ({route}) => {
  const [pio, setPio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation(); // Get the navigation object
  const dispatch = useDispatch(); // Get the navigation object
  const selectedGender = route.params?.selectedGender
  const selectedCountry = route.params?.selectedCountry
  const selectedMathab = route.params?.selectedMathab
  const selectedFamily = route.params?.selectedFamily
  const userName = route.params?.userName
  const selectedMe = route.params?.userName
  const selectedEdu = route.params?.selectedEdu
  const selectedSocity = route.params?.selectedSocity
  const weight = route.params?.weight
  const height = route.params?.height
  const selectedColor = route.params?.selectedColor
  const selectedSmoke = route.params?.selectedSmoke
  const selectedPrayer = route.params?.selectedPrayer
  const selectedContact = route.params?.selectedContact
  const selectedHijab = route.params?.selectedHijab
  const selectedCurrent = route.params?.selectedCurrent
  const selectedMarr = route.params?.selectedMarr
  const selectedKids = route.params?.selectedKids
  const selectedCountryName = route.params?.selectedCountryName
  const selectedCity = route.params?.selectedCity
  const phoneNumber = route.params?.phoneNumber
  const userBirthday = route.params?.userBirthday
  const habits = route.params?.habits
  const username = route.params?.username
  const password = route.params?.password
  const value = route.params?.value
  const imagePic = route.params?.imagePic



  const handleContinue =async () => {
    if (pio.length <= 140) {
      // const habitArrayText=[]
      // const habitArray=habits.filter((item)=>item.selected==true)
      // for (let index = 0; index < habitArray.length; index++) {
      //   const element = habitArray[index];
      //   habitArrayText.push(element.text)
      // }

console.log("password",password);

password


//  try {
//    const response = await axios.post(`https://marriage-application.onrender.com/register`, {
//     "phone": phoneNumber,
//     "name": userName,
//     "gender": selectedGender,
//     "birthdate": userBirthday,
//     "nationality": selectedCountry.name,
//     "country":selectedCountryName.name_ar,
// "city":selectedCity.name_ar,
// "religious_denomination": selectedMathab,
// "tribal_affiliation": selectedFamily,
// "work_status_woman_man": selectedCurrent,
// "marital_status_woman_man": selectedSocity,
// "expected_marriage_date_woman": selectedMarr,
// "need_kids_woman_man": selectedKids,
// "wearing_hijab_woman_man": selectedHijab,
// "fav_communication_woman_man": selectedContact,
// "religious_commitment_woman_man": selectedPrayer,
// "smoking_drinking_woman_man": selectedSmoke,
// "skin_woman_man": selectedColor,
// "weight_woman": weight,
// "height_woman": height,
// "daily_habits_woman": habitArrayText,
// "image":imagePic,
// "username":username,
// "password":password,
// "health_status_woman_man": selectedMe,
//  "educational_level_woman_man": selectedEdu,
// "pio":pio,

//    });
//    if (response.status === 200) {
//     dispatch(userMethod(response.data))
//     navigation.navigate('MainHome')

//    }
//  } catch (error) {
//    console.error('Error fetching data: ', error);
//  }

      // navigation.navigate("MainHome"); // Navigate to the home screen
    } else {
      setErrorMessage("Maximum characters exceeded (140 characters)");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top-left arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topLeft]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
      </TouchableOpacity>

      {/* Top-right arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topRight]}
        onPress={handleContinue}
      >
        <AntDesign name="arrowright" size={24} color="#ECB7B7" />
      </TouchableOpacity>
      <Text style={styles.title}>أكتب نبذة عنك..</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="اكتب هنا..."
          value={pio}
          onChangeText={(text) => {
            // Limiting to 140 characters
            if (text.length <= 140) {
              setPio(text);
              setErrorMessage("");
            } else {
              // Trimming the text to the first 140 characters
              setPio(text.substring(0, 140));
              setErrorMessage("Maximum characters exceeded (140 characters)");
            }
          }}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    right: -100,
  },
  inputContainer: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    width: "100%",
    textAlignVertical: "top",
    fontSize: 18,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },

  topLeft: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  topRight: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
});

export default PioScreen;
