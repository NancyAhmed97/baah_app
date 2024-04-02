
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import * as ExpoImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignInPage = ({route}) => {
    const [avatarSource, setAvatarSource] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
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




     useEffect(() => {
     (async () => {
       const { status } =
         await ExpoImagePicker.requestMediaLibraryPermissionsAsync();
       if (status !== "granted") {
         console.log("تم رفض الإذن!");
       }
     })();
   }, []);

   

   const handleDownloadImage = () => {
     setShowOptions(true);
   };

   const selectImage = async (sourceType) => {
     let pickerFunction;

     if (sourceType === "library") {
       pickerFunction = ExpoImagePicker.launchImageLibraryAsync;
     } else if (sourceType === "camera") {
       pickerFunction = ExpoImagePicker.launchCameraAsync;
     }

     const result = await pickerFunction({
       mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });

     if (!result.cancelled && result.assets.length > 0) {
       setAvatarSource({ uri: result.assets[0].uri });
       setShowOptions(false);
     }
   };

   const removeImage = () => {
     setAvatarSource(null);
   };

   const handleContinue = () => {
     const isValid = validatePassword(password);
     if (!isValid) {
       setPasswordError("Password must meet all requirements.");
       return;
     }
     if (password !== confirmPassword) {
       setPasswordError("Passwords do not match.");
       return;
     }
if(avatarSource===null||!username||!password){
  Alert.alert('برجاء املاء جميع الحقول')

}else{
  setPasswordError("");
  navigation.navigate("Visibility", {
   phoneNumber:phoneNumber,
   userName:userName,
   selectedGender:selectedGender,
   userBirthday:userBirthday,
   selectedCountry:selectedCountry,
   selectedCountryName:selectedCountryName,
   selectedCity:selectedCity,
   selectedMathab:selectedMathab,
   selectedFamily:selectedFamily,
   selectedMe:selectedMe,
   selectedCurrent:selectedCurrent,
   selectedMarr:selectedMarr,
   selectedKids:selectedKids,
   selectedHijab:selectedHijab,
   selectedContact:selectedContact,
   selectedPrayer:selectedPrayer,
   selectedSmoke:selectedSmoke,
   selectedColor:selectedColor,
   weight:weight,
   height:height,
   habits:habits,
   selectedEdu:selectedEdu,
   selectedSocity:selectedSocity,
    imagePic: avatarSource ? avatarSource.uri : null,
    username:username,
    password:password

  });
}
   };
console.log('avatarSource',avatarSource);
   const validatePassword = (password) => {
const lengthRegex = /.{8,}/; // At least 8 characters
const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
const lowercaseRegex = /[a-z]/; // At least one lowercase letter
const digitRegex = /\d/; // At least one digit
const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/; // At least one symbol

return (
  lengthRegex.test(password) &&
  uppercaseRegex.test(password) &&
  lowercaseRegex.test(password) &&
  digitRegex.test(password) &&
  symbolRegex.test(password)
);
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

  <TouchableOpacity onPress={handleDownloadImage}>
    <View style={styles.imageContainer}>
      {avatarSource ? (
        <Image source={{ uri: avatarSource.uri }} style={styles.image} />
      ) : (
        <Text>fjkdfjdk</Text>
        // <Image
        //   source={require("./assets/gblank.jpg")}
        //   style={styles.blankImage}
        // />
      )}

      <View style={styles.editIconContainer}>
        <AntDesign name="edit" size={24} color="black" />
      </View>
    </View>
  </TouchableOpacity>

  {/* White Box Container */}
  <View style={styles.whiteBox}>
    {<Text style={styles.title}>مستخدم جديد</Text>}
    <TextInput
      style={styles.input}
      placeholder="اسم المستخدم"
      value={username}
      onChangeText={setUsername}
    />

    {/* Password Input */}
    <TextInput
      style={[styles.input, styles.passwordInput]}
      placeholder="كلمة المرور"
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => {
        setPassword(text);
        setPasswordError("");
      }}
    />

    {/* Confirm Password Input */}
    <TextInput
      style={[styles.input, styles.passwordInput]}
      placeholder="تأكيد كلمة المرور"
      secureTextEntry={true}
      value={confirmPassword}
      onChangeText={(text) => {
        setConfirmPassword(text);
        setPasswordError("");
      }}
    />

    {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
    {passwordError && (
      <Text style={styles.passwordRequirement}>
        Password must:
        {"\n"}- Be at least 8 characters long
        {"\n"}- Contain at least one uppercase letter
        {"\n"}- Contain at least one lowercase letter
        {"\n"}- Contain at least one number
        {"\n"}- Contain at least one symbol
      </Text>
    )}
  </View>

  {/* Image Picker Modal */}
  <Modal
    visible={showOptions}
    transparent={true}
    animationType="slide"
    onRequestClose={() => setShowOptions(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => selectImage("camera")}
        >
          <Text style={styles.optionText}>التقاط صورة</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => selectImage("library")}
        >
          <Text style={styles.optionText}>اختيار من الكاميرا</Text>
        </TouchableOpacity>
        {avatarSource && (
          <TouchableOpacity
            style={[styles.optionButton, styles.deleteButton]}
            onPress={removeImage}
          >
            <Text style={[styles.optionText, styles.deleteText]}>
              إزالة
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => setShowOptions(false)}
        >
          <Text style={styles.optionText}>إلغاء</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
</View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
backgroundColor: "white", // Background color for better visualization
  },

   whiteBox: {
     width: "90%", // Adjust the width of the box
    backgroundColor: "#9fadbd",
borderRadius: 25,
padding: 20,
position: "absolute", // Position the box absolutely
top: 340, // Align the box at the bottom of the screen
marginBottom: "500%", // Take half of the page's height
alignItems: "center",
  },
input: {
width: "80%",
height: 55,
borderWidth: 1,
borderColor: "#b2b8bf", // Change border color to match the white box
borderRadius: 10,
marginVertical: 10,
paddingHorizontal: 15,
backgroundColor: "#b2b8bf", // Add background color to the input
alignSelf: "center", // Center the input within the white box
  },
  imageContainer: {
position: "relative",
width: 150,
height: 150,
borderRadius: 75,
borderWidth: 2,
borderColor: "#f0f0f0", // match background color
justifyContent: "center",
alignItems: "center",
marginBottom: 300,
overflow: "hidden",
},
image: {
width: "100%",
height: "100%",
borderRadius: 75,
},
blankImage: {
width: "100%",
height: "100%",
},
editIconContainer: {
position: "absolute",
bottom: 5,
right: 5,
},
modalContainer: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "rgba(0, 0, 0, 0.5)",
},
optionContainer: {
backgroundColor: "#fff",
padding: 20,
borderRadius: 10,
width: "80%",
},
optionButton: {
padding: 15,
borderRadius: 8,
backgroundColor: "#f5f5f5",
marginVertical: 5,
},
optionText: {
fontSize: 16,
textAlign: "center",
},
deleteButton: {
backgroundColor: "red",
},
deleteText: {
color: "#fff",
},
passwordInput: {
textAlign: "right",
},
passwordRequirement: {
marginTop: 10,
marginBottom: 20,
textAlign: "right",
fontSize: 14,
color: "#777",
},
errorText: {
color: "red",
marginBottom: 10,
},
iconButton: {
position: "absolute",
padding: 10,
zIndex: 1,
},
title: {
fontSize: 30,

marginBottom: 40,
color: "black", // Change color to match the white box background
textAlign: "right", // Align the text to the right
width: "100%", // Center the title
},

topLeft: {
top: 40,
left: 20,
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
topRight: {
top: 40,
right: 20,
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
 });

export default SignInPage
