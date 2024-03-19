import React, { useState, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const CustomTabBarButton = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const submenuOpacity = useRef(new Animated.Value(0)).current; // Controls the opacity of the submenu

  // Toggle submenu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(submenuOpacity, {
      toValue: isOpen ? 0 : 1, // Toggle opacity
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {isOpen && (
        <Animated.View
          style={[
            styles.submenuContainer,
            { opacity: submenuOpacity }, // Apply animated opacity to submenu
          ]}
        >
          {/* Submenu Items */}
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => {
              // Handle navigation or action
              console.log("Submenu item 1 pressed");
            }}
          >
            <AntDesign name="appstore-o" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => {
              // Handle navigation or action
              console.log("Submenu item 2 pressed");
            }}
          >
            <AntDesign name="edit" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => {
              // Handle navigation or action
              console.log("Submenu item 3 pressed");
            }}
          >
            <AntDesign name="delete" size={20} color="#FFF" />
          </TouchableOpacity>
        </Animated.View>
      )}

      <TouchableOpacity onPress={toggleMenu} style={styles.button}>
        <AntDesign name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    bottom: 20, // Adjust this to place the button correctly above the bottom bar
  },
  button: {
    backgroundColor: "#ECB7B7",
    width: 60,
    height: 60,
    top: -50,
    right: -140,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure the button is above the submenu
  },
  submenuContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 70, // Adjust this to position the submenu correctly above the plus button
  },
  submenuItem: {
    backgroundColor: "#ECB7B7",
    width: 40,
    height: 40,
    top: -70,
    right: -140,

    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5, // Adjust spacing between submenu items
  },
});

export default CustomTabBarButton;
