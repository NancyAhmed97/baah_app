import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Inbox = ({ navigation }) => {
  const [data, setData] = useState([]);
  const messages = useSelector((state) => state);


  // const [messages, setMessages] = useState([
  //   {
  //     id: 1,
  //     sender: "محمد سعيد",
  //     content: "ممكن نتعرف؟",
  //   },
  //   {
  //     id: 2,
  //     sender: "ياسر علي",
  //     content: "مرحبًا، ما هي خططك لعطلة نهاية الأسبوع؟",
  //   },
  //   {
  //     id: 3,
  //     sender: "سليمان صالح",
  //     content: "كيف حالك",
  //   },
  //   {
  //     id: 4,
  //     sender: "حمد عيسى",
  //     content: "هل ترغبين في الانضمام إلى العشاء الليلة؟",
  //   },
  // ]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const token = await AsyncStorage.getItem("login");
  //     const querySnapshot = await getDocs(collection(db, "messages"));
  //     const x = querySnapshot.docs.filter((item) => item.data().user === JSON.parse(token).id)
  //     setData(x);


  //   };

  //   fetchData();

  // }, [])
  // Function to navigate to message details
  const handleMessagePress = (message) => {
    navigation.navigate("chat", { participant: message.data().senderId });
  };

  // Render each message item
  const renderMessageItem = ({ item }) => {
    let milliseconds = item.data().createdAt.seconds * 1000 + Math.round(item.data().createdAt.nanoseconds / 1e6);

    const date = new Date(milliseconds);



    return (
      <TouchableOpacity
        onPress={() => handleMessagePress(item)}
        style={styles.messageItem}
      >
        <Text
          style={{
            textAlign: 'right'
          }}
        >


          {JSON.stringify(date).substring(1, JSON.stringify(date).length - 15)}
        </Text>

        <View style={styles.messageContent}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.content}>{item.data().text}</Text>
        </View>
        <Image source={require("./assets/pp.png")} style={styles.profileImage} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages.messages.messagesArray} // Reverse the order of messages
        keyExtractor={(item) => item.data().user.toString()}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    paddingTop: 10, // Add padding to avoid the first message being cut off
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginLeft: 10, // Adjusted to display on the right side
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  sender: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4B5867", // Changed color
    textAlign: "right", // Align text to right
  },
  content: {
    fontSize: 14,
    color: "#333",
    textAlign: "right", // Align text to right
    marginTop: 5,
  },
});

export default Inbox;
