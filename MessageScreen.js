import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import { Platform } from 'react-native';
const Chatroom = ({ route }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSent, setIsSent] = useState(true); // Flag to determine if a message is sent or received
  const userId = route.params?.userId // Default to 7 if not provided




  const handleSend = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, isSent }]);
      setMessage("");
      setIsSent(!isSent); // Toggle the flag for the next message
    }
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.isSent ? styles.sentMessage : styles.receivedMessage,
            ]}
          >

            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContainer}
      />

      <View style={styles.textInputContainer}>

        <TextInput
          style={styles.textInput}
          placeholder="اكتب رسالتك"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />

        <Button
          title="إرسال"
          onPress={handleSend}
          color="#007BFF"
          style={styles.sendButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  chatContainer: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginLeft: 5,
    textAlign: "right", // Align text to the right for Arabic input
  },
  sendButton: {
    backgroundColor: "#ECB7B7",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 5,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    maxWidth: "70%", // Adjust the width as needed
    alignSelf: "flex-start",
  },
  sentMessage: {
    backgroundColor: "#ECB7B7",
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: "#E5E5E5",
    alignSelf: "flex-start",
  },
  messageText: {
    textAlign: "right", // Right-to-left text alignment
  },
});

export default Chatroom;
