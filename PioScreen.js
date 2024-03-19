import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const PioScreen = () => {
  const [pio, setPio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation(); // Get the navigation object

  const handleContinue = () => {
    if (pio.length <= 140) {
      navigation.navigate("MainHome"); // Navigate to the home screen
    } else {
      setErrorMessage("Maximum characters exceeded (140 characters)");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top-left arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topLeft]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={24} color="#9B9B9B" />
      </TouchableOpacity>

      {/* Top-right arrow icon */}
      <TouchableOpacity
        style={[styles.iconButton, styles.topRight]}
        onPress={handleContinue}
      >
        <AntDesign name="arrowright" size={24} color="#ECB7B7" />
      </TouchableOpacity>
      <Text style={styles.title}>أكتب نبذة عنك..</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="اكتب هنا..."
          value={pio}
          onChangeText={(text) => {
            // Limiting to 140 characters
            if (text.length <= 140) {
              setPio(text);
              setErrorMessage("");
            } else {
              // Trimming the text to the first 140 characters
              setPio(text.substring(0, 140));
              setErrorMessage("Maximum characters exceeded (140 characters)");
            }
          }}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    right: -100,
  },
  inputContainer: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    width: "100%",
    textAlignVertical: "top",
    fontSize: 18,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },

  topLeft: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  topRight: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
});

export default PioScreen;
