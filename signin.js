
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Import your application logo
import YourLogo from './assets/baa.jpg';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  const handleContinue = () => {
    if (username === '') {
      setUsernameError('يرجى إدخال اسم المستخدم');
      return;
    }

    const isValid = validatePassword(password);
    if (!isValid) {
      setPasswordError('كلمة المرور يجب أن تحتوي على الأقل 8 أحرف وحرف كبير وحرف صغير ورقم ورمز خاص');
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('كلمة المرور غير متطابقة');
      return;
    }
    // If all conditions are met, navigate to 'PioScreen'
    navigation.navigate('PioScreen');
  };

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

  const toggleSecurePassword = () => {
    setSecurePassword(!securePassword);
  };

  const toggleSecureConfirmPassword = () => {
    setSecureConfirmPassword(!secureConfirmPassword);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <View style={styles.inner}>
        {/* Logo */}
        <Image source={YourLogo} style={styles.logo} />

        {/* Top-left arrow icon */}
        <TouchableOpacity style={styles.iconButtonLeft} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
        </TouchableOpacity>

        {/* Top-right arrow icon */}
        <TouchableOpacity style={styles.iconButtonRight} onPress={handleContinue}>
          <AntDesign name="arrowright" size={24} color="#f5b4b5" />
        </TouchableOpacity>

        <View style={styles.whiteBox}>
          {/* Sign-Up Title */}
          <Text style={styles.title}>إنشاء حساب جديد</Text>

          {/* Username Input */}
          <TextInput
            style={styles.input}
            placeholder="اسم المستخدم"
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError('');
            }}
            value={username}
          />

          {/* Username Error */}
          {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

          {/* Password Input */}
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              placeholder="كلمة المرور"
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
              value={password}
              secureTextEntry={securePassword}
            />
            <TouchableOpacity onPress={toggleSecurePassword} style={styles.eyeIcon}>
              <AntDesign name={securePassword ? "eye" : "eyeo"} size={24} color="#808080" />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              placeholder="تأكيد كلمة المرور"
              onChangeText={(text) => {
                setConfirmPassword(text);
                setPasswordError('');
              }}
              value={confirmPassword}
              secureTextEntry={secureConfirmPassword}
            />
            <TouchableOpacity onPress={toggleSecureConfirmPassword} style={styles.eyeIcon}>
              <AntDesign name={secureConfirmPassword ? "eye" : "eyeo"} size={24} color="#808080" />
            </TouchableOpacity>
          </View>

          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color for better visualization
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 112,
    height: 90,
    position: 'absolute',
    top: 90,
  },
  whiteBox: {
    backgroundColor: '#9fadbd',
    width: '100%', // Adjust as needed
    height: '70%', // Adjust as needed
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    borderTopLeftRadius: 100, // Top left border radius
    borderBottomLeftRadius: 1, // Bottom left border radius
    borderTopRightRadius: 1, // Top right border radius
    borderBottomRightRadius: 1, // Bottom right border radius
    overflow: 'hidden', // Ensure the content within the box does not overflow
    alignItems: 'center',
    top: 150
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#b2b8bf',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#b2b8bf',
    textAlign: 'right',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  iconButtonLeft: {
    position: 'absolute',
    padding: 10,
    top: 40,
    left: 20,
    zIndex: 1,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#F2F2F2',
  },
  iconButtonRight: {
    position: 'absolute',
    padding: 10,
    top: 40,
    right: 20,
    zIndex: 1,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#F2F2F2',
  },
  title: {
    position:'absolute',
    fontSize: 30,
    color: 'black',
    textAlign: 'right',
    top: 27, // Adjust as needed
    width: '100%',  // Add this line to align text to the right
  },
  passwordInput: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    left: 10,
    top: 20,
  
  },
});

export default SignUp;
