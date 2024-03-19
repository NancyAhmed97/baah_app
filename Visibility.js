import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation, useRoute } from '@react-navigation/native';

const Visibility = () => {
  const [value, setValue] = useState(0);
  const [imageUri, setImageUri] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setImageUri(route.params?.imageUri);
    setValue(route.params?.blurRadius || 0);
  }, [route.params?.imageUri, route.params?.blurRadius]);

  const handleContinue = () => {
    // Navigate to 'Pioscreen' when the button is pressed
    navigation.navigate('PioScreen');
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
