import { AntDesign, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleMode } from './Redux/DarkMode';
import axios from 'axios';
import { userMethod } from './Redux/user';

const SettingsScreen = ({ navigation }) => {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const reducState = useSelector((state) => state);
  console.log(reducState.user.userArray.id);
  const dispatch = useDispatch();

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };


  const handleChangeNumber = () => {
    navigation.navigate('Login',{
      "state":"ChangePhone"
    });
  };

  const handleAddPaymentMethod = () => {
    // Implement payment method addition functionality
  };

  const togglePushNotifications = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
    // Implement push notification toggle functionality
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
    dispatch(handleMode(!darkModeEnabled))
    // Implement dark mode toggle functionality
  };

  const handleAboutUs = () => {
    navigation.navigate('AboutApp');
  };

  const handlePrivacyPolicy = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleLogout = async () => {
    dispatch(userMethod({}))
    navigation.navigate("Login",{
      "state":"register"

    });
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.post(`https://marriage-application.onrender.com/deleteaccount?id=${reducState.user.userArray.id}`);
      if (response.status === 200) {
        console.log(response.data);
        navigation.navigate('Login',{
          "state":"register"
    
        })
      }
    } catch (error) {
      console.error('Error fetching data: ', error.data);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circularButtonsContainer}>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#9B9B9B" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>الإعدادات </Text>

      <TouchableOpacity onPress={handleChangePassword} style={styles.settingItem}>
        <Text style={styles.settingText}>تغيير كلمة المرور</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleChangeNumber} style={styles.settingItem}>
        <Text style={styles.settingText}>تغيير الرقم</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddPaymentMethod} style={styles.settingItem}>
        <Text style={styles.settingText}>إضافة وسيلة دفع</Text>
      </TouchableOpacity>

      <View style={styles.settingRow}>
        <Switch value={pushNotificationsEnabled} onValueChange={togglePushNotifications} />
        <Text style={styles.settingText}>الإشعارات</Text>
      </View>

      <View style={styles.settingRow}>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
        <Text style={styles.settingText}>الوضع الليلي</Text>
      </View>

      <TouchableOpacity onPress={handleAboutUs} style={styles.settingItem}>
        <Text style={styles.settingText}>حول التطبيق</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePrivacyPolicy} style={styles.settingItem}>
        <Text style={styles.settingText}>سياسة الخصوصية</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={[styles.settingItem, styles.logoutButton]}>
        <Text style={styles.logoutText}>تسجيل الخروج</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteAccount} style={[styles.settingItem, styles.deleteButton]}>
        <Text style={styles.deleteAccountText}>الغاء الحساب</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    padding: 40
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingRight: 10,
  },
  settingText: {
    fontSize: 18,
    color: '#333333',
  },
  logoutButton: {
    backgroundColor: '#ffffff',
  },
  deleteButton: {
    backgroundColor: '#ffffff',
  },
  logoutText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  deleteAccountText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  circularButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  circularButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },

});

export default SettingsScreen;
