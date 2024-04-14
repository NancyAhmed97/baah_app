import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native'
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "./Firebase-config";
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = ({ route }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSent, setIsSent] = useState(true); // Flag to determine if a message is sent or received
  const navigation = useNavigation();
  const name = route.params?.name
  const image = route.params?.image
  const userinfo = useSelector((state) => state);
  const participant = route.params.participant
  const messagesRef = collection(db, "messages");
  const xxx = async () => {
    // const flatArray = userinfo.messages.messagesArray.flatMap(arr => arr);
    // const objectWithId2 = flatArray.filter(obj =>obj.senderId==participant);
    const querySnapshot = await getDocs(collection(db, "messages"));
    const myMsg = querySnapshot.docs.filter((item) => item.data().user == userinfo.user.userArray.id)
    const idMap = {};
    myMsg.forEach((msgs) => {
      if (idMap[msgs.data().senderId]) {
        idMap[msgs.data().senderId].push(msgs.data());
      } else {
        idMap[msgs.data().senderId] = [msgs.data()];
      }
    })
    const resultArrays = Object.values(idMap);
    resultArrays.map((item) => {
       filteringArr = item.filter((mmm) => mmm.senderId == participant)
      setMessages(filteringArr)
    })

  }
  useEffect(() => {
    // const queryMessages = query(
    //   messagesRef,
    //   orderBy("createdAt")
    // );
    // const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
    //   let messages = [];
    //   snapshot.forEach((doc) => {
    //     messages.push({ ...doc.data(), id: doc.id });
    //   });
    // const flatArray = userinfo.messages.messagesArray.flatMap(arr => arr);
    // const objectWithId2 = flatArray.filter(obj =>obj.senderId==participant);
    // setMessages(objectWithId2);

    // });

    // return () => unsuscribe();


    xxx();
  }, [])

  const handleSend = async () => {
    try {
      // Reference to the collection where you want to add the document
      const collectionRef = collection(db, 'messages');

      // Add a new document with an auto-generated ID
      await addDoc(collectionRef, {
        text: message,
        createdAt: serverTimestamp(),
        user: userinfo.user.userArray.id,
        senderId: participant,
        img: '',
        name: name
      });

      console.log('Document added successfully!');
      xxx()
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    // await addDoc(messagesRef, {
    //     text: message,
    //     createdAt: serverTimestamp(),
    //     user:userinfo.user.userArray.id,
    //     senderId:userId,
    //     img:'',
    //     name:name
    //   });


    // if (message.trim() !== "") {
    //   setMessages([...messages, { text: message, isSent }]);
    //   setMessage("");
    //   setIsSent(!isSent); // Toggle the flag for the next message
    // }
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

      <ScrollView>

        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>(
              <View
              style={[
                styles.messageContainer,
                item.isSent ? styles.sentMessage : styles.receivedMessage,
              ]}
            >

              <Text style={styles.messageText}>{item.text}</Text>
            </View>
            )
          }
          contentContainerStyle={styles.chatContainer}
        />
      </ScrollView>

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
  circularButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20,
    width: "100%",
    paddingHorizontal: 22
  },
  circularButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#F2F2F2',
    zIndex: 77777777777777777777777777777777777777
  },
});


export default Chat