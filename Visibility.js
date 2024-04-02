import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';

const Visibility = ({route}) => {
  const [value, setValue] = useState(0);
  const [imageUri, setImageUri] = useState('');
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
  const username = route.params?.username
  const password = route.params?.password
  const imagePic = route.params?.imagePic



  useEffect(() => {
    setImageUri(route.params?.imagePic);
    setValue(route.params?.blurRadius || 0);
  }, [route.params?.imagePic, route.params?.blurRadius]);

  const handleContinue = () => {
    // Navigate to 'Pioscreen' when the button is pressed
    navigation.navigate('PioScreen',{
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
      imagePic:imagePic,
       username:username,
       password:password,
       value:value

    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUri }}
        style={styles.backgroundImage}
        blurRadius={value}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>للحفاظ على خصوصيتك</Text>
          <Text style={styles.subtitle}>اختاري وضوح الصورة</Text>
        </View>
      </ImageBackground>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          step={1}
          maximumValue={10}
          minimumValue={0}
          onValueChange={(newValue) => setValue(newValue)}
          minimumTrackTintColor="#f5b4b5"
          thumbTintColor="#f5b4b5"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>متابعة</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingVertical: 20,
  },
  slider: {
    width: '80%',
  },
  button: {
    backgroundColor: '#f5b4b5',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Visibility;
