// MainHome.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import FavoriteScreen from "./FavoriteScreen";
import Subscription from "./Subscription";
import MessageScreen from "./MessageScreen";
import { FavoritesProvider } from "./FavoritesContext";
import Profile from "./Profile";
import SearchSubMenu from "./SearchSubMenu";
import Chat from "./Chat";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  const handleSearchPress = () => {
    if (isSearch) {
      navigation.navigate("Home");
    }
    setIsSearch(!isSearch);
    setIsPressed(!isPressed); // Toggle isPressed state
  };

  const handleLongPress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.plusButtonContainer}>
      {/* Display the SearchSubMenu when isPressed is true */}
      {isPressed && <SearchSubMenu onSelect={(type) => console.log(type)} />}
      <TouchableWithoutFeedback
        onPress={handleSearchPress}
        onLongPress={handleLongPress}
      >
        <View
          style={[
            styles.searchButton,
            isPressed ? { backgroundColor: "#ECB7B7" } : null,
          ]}
        >
          {isSearch ? (
            <AntDesign name="search1" size={30} color="#fff" />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const MainHome = () => {
  return (
    <FavoritesProvider>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                elevation: 0,
                backgroundColor: "#ffffff",
                height: 90,
                ...styles.shadow,
              },
            }}
          >
            <Tab.Screen
              name="Subscription"
              component={Subscription}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                    <MaterialCommunityIcons
                      name={focused ? "currency-usd" : "currency-usd-off"}
                      size={25}
                      color={focused ? "#ECB7B7" : "#4B5867"}
                    />
                    <Text
                      style={{
                        color: focused ? "#ECB7B7" : "#4B5867",
                        fontSize: 12,
                      }}
                    >
                      الإشتراكات
                    </Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen
              name="Message"
              component={Chat}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                    <AntDesign
                      name={focused ? "message1" : "message1"}
                      size={25}
                      color={focused ? "#ECB7B7" : "#4B5867"}
                    />
                    <Text
                      style={{
                        color: focused ? "#ECB7B7" : "#4B5867",
                        fontSize: 12,
                      }}
                    >
                      الرسائل
                    </Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarButton: (props) => <CustomTabBarButton {...props} />,
              }}
            />

            <Tab.Screen
              name="Favorite"
              component={FavoriteScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                    <MaterialCommunityIcons
                      name={focused ? "star" : "star-outline"}
                      size={30}
                      color={focused ? "#ECB7B7" : "#4B5867"}
                    />
                    <Text
                      style={{
                        color: focused ? "#ECB7B7" : "#4B5867",
                        fontSize: 12,
                      }}
                    >
                      المفضلة
                    </Text>
                  </View>
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabIconContainer}>
                    <AntDesign
                      name={focused ? "profile" : "profile"}
                      size={25}
                      color={focused ? "#ECB7B7" : "#4B5867"}
                    />
                    <Text
                      style={{
                        color: focused ? "#ECB7B7" : "#4B5867",
                        fontSize: 12,
                      }}
                    >
                      ملفي الشخصي
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </View>

        <View>{/* Any additional components for the bottom area */}</View>
      </View>
    </FavoritesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#7F5D50",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    color: "#4B5867", // Default color
  },
  plusButtonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    bottom: 50,
    left: 0,
    right: 0,
  },
  plusButtonContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    bottom: 50,
    left: 0,
    right: 0,
  },
  searchButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4B5867", // Default color
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainHome;
