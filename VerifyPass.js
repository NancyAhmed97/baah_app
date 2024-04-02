// PasswordVerificationScreen.js
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PasswordVerificationScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleVerifyPassword = () => {
    // Implement password verification logic
    // If password is correct, navigate to NewNumberScreen
    navigation.navigate('NewNumber');
  };

  return (
    <View
    style={{
      flex:1,
      paddingHorizontal:22,
      paddingTop:22
    }}
    >
            <TouchableOpacity
        style={[styles.iconButton, styles.topLeft]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
      </TouchableOpacity>

    <View style={styles.container}>

      <Text style={styles.title}>Verify Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleVerifyPassword} style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PasswordVerificationScreen;
