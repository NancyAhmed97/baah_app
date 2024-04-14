import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GirlsQ from "./GirlsQ";
import BoysQ from "./BoysQ";
import GeneralQ from "./GeneralQ";
import Daily from "./Daily";
import MainHome from "./MainHome";
import Splashsc from "./Splashsc";
import Login from "./Login";
import LoginOTP from "./LoginOTP";
import SplashTwo from "./SplashTwo";
import SignInPage from "./SignInPage";
import Visibility from "./Visibility";
import PioScreen from "./PioScreen";
import LogInPage from "./LogInPage";
import UserProfile from "./UserProfile";
import SettingsScreen from "./SettingsScreen";
import PrivacyPolicy from "./PrivacyPolicy";
import ChangePasswordScreen from "./ChangePasswordScreen";
import VerifyPassScreen from "./VerifyPass";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Subscription from "./Subscription";
import AboutApp from "./AboutUs";
import PaymentScreen from "./PaymentScreen";
import Chat from "./Chat";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { StyleSheet } from "react-native";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import PasswordResetConfirmationScreen from "./PasswordResetConfirmationScreen";
import NewChat from "./NewChat";


const Stack = createStackNavigator();

const App = () => {
  const toggleDarkMode =  AsyncStorage.getItem("stringValue");
  const persistor = persistStore(store);

  return (
    <Provider store={store}

    >
      <PersistGate loading={null} persistor={persistor}
      
      >

    <NavigationContainer
   
    >
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: "white" },
          headerShown: false, // Set the background color here and remove header
        }}
        
      >
        <Stack.Screen name="Splashsc" component={Splashsc} />
        <Stack.Screen name="SplashTwo" component={SplashTwo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOTP" component={LoginOTP} />
        <Stack.Screen name="GeneralQ" component={GeneralQ} />
        <Stack.Screen name="GirlsQ" component={GirlsQ} />
        <Stack.Screen name="BoysQ" component={BoysQ} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="Visibility" component={Visibility} />
        <Stack.Screen name="PioScreen" component={PioScreen} />
        <Stack.Screen name="MainHome" component={MainHome} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="VerifyPass" component={VerifyPassScreen} />
        <Stack.Screen name="Subscription" component={Subscription} />
        {/* <Stack.Screen name="chat" component={Chat} /> */}
        <Stack.Screen name="chat" component={NewChat} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PasswordResetConfirmation" component={PasswordResetConfirmationScreen} />


      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
};

export default App;
