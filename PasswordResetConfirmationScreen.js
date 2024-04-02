import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PasswordResetConfirmationScreen = () => {
    const navigation = useNavigation(); // Initialize navigation

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userinfo = useSelector((state) => state);
    console.log(userinfo.user.userArray.id);
  
    const handleChangePassword = async () => {
      // Implement password change functionality
      if (newPassword === confirmPassword) {
        const response = await axios.post(`https://marriage-application.onrender.com/forgotpassword?id=${userinfo.user.userArray.id}&new_password=${newPassword}`);
        if (response.status === 200) {
  
          alert(response.data)
        }
  
     
  
      } else {
        alert("New password and confirm password don't match");
      }
    };
  
    const handleForgetPassword = () => {
      // Navigate to the verification screen when "Forget Password?" link is pressed
      navigation.navigate('ForgotPassword'); // Assuming 'Verification' is the name of your verification screen
    };
  
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.iconButton, styles.topLeft]}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
          </TouchableOpacity>
          <Text style={styles.title}>أعادة تعيين كلمة المرور</Text>
    
      
    
          <View style={styles.settingItem}>
            <TextInput
              style={styles.input}
              placeholder="كلمة المرور الجديدة"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
          </View>
    
          <View style={styles.settingItem}>
            <TextInput
              style={styles.input}
              placeholder="تأكيد كلمة المرور"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
    
          <TouchableOpacity onPress={handleChangePassword} style={[styles.settingItem, styles.changePasswordButton]}>
            <Text style={styles.changePasswordText}>اعادة تعيين كلمة المرور</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
    
      container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#ffffff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        padding: 45,
        textAlign: 'center',
      },
      settingItem: {
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlign: 'right'
      },
      changePasswordButton: {
        backgroundColor: 'blue',
      },
      changePasswordText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 15,
      },
      forgetPasswordText: {
        fontSize: 16,
        color: 'blue',
        textAlign: 'right',
        marginTop: 5,
      },
      
    });
export default PasswordResetConfirmationScreen