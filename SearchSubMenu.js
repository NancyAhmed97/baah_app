// SearchSubMenu.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const SearchSubMenu = ({ onSelect }) => {
  return (
    <View style={styles.subMenuContainer}>
      <TouchableOpacity
        onPress={() => onSelect("filtered")}
        style={styles.subMenu}
      >
        <View style={styles.subMenuIcon}>
          <Ionicons name="filter" size={20} color="#4B5867" />
        </View>
        <Text style={styles.subMenuText}>Filtered</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect("ai")}
        style={[styles.subMenu, styles.aiSubMenu]}
      >
        <View style={styles.subMenuIcon}>
          <FontAwesome5 name="brain" size={20} color="#4B5867" />
        </View>
        <Text style={styles.subMenuText}>AI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect("random")}
        style={styles.subMenu}
      >
        <View style={styles.subMenuIcon}>
          <AntDesign name="questioncircleo" size={20} color="#4B5867" />
        </View>
        <Text style={styles.subMenuText}>Random</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  subMenuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: -90, // Adjust this value to position the submenus above the search icon
    left: 0,
    right: 0,
  },
  subMenu: {
    alignItems: "center",
    marginHorizontal: 10, // Adjust this value for spacing between submenus
  },
  aiSubMenu: {
    top: -25, // Adjust this value to position the AI submenu more above
  },
  subMenuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  subMenuText: {
    color: "#4B5867",
    marginTop: 5,
    fontSize: 10,
  },
};

export default SearchSubMenu;
