import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from "firebase/firestore";
import { db } from "./Firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Inbox = ({ navigation }) => {
  const [data, setData] = useState([]);
  const messages = useSelector((state) => state);
  const userinfo = useSelector((state) => state);

  useLayoutEffect(() => {
    const collectionRef = collection(db, 'messagesList');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const myMsg = querySnapshot.docs.filter((item) => item.data().sendBy == userinfo.user.userArray.id)
      const myMsg1 = querySnapshot.docs.filter((item) => item.data().sendTo == userinfo.user.userArray.id)
      const combined = myMsg.concat(myMsg1);
      const idMap = {};
      combined.forEach((msgs)=>{
        console.log("msgs",msgs);
        if (idMap[msgs.data().sendTo]) {
          idMap[msgs.data().sendTo].push(msgs.data());

        }else{
          idMap[msgs.data().sendTo] = [msgs.data()];
        }
      })
    console.log("idMap",Object.values(idMap)[0].length);
      const resultArrays = Object.values(idMap);
      const resultArrays1=resultArrays.filter((item)=>item[0].sendBy!==userinfo.user.userArray.id)
      setData(resultArrays1)
        })
    // const unsubscribe = onSnapshot(q, querySnapshot => {



    //     // const myMsg=querySnapshot.docs.filter((item)=>item.data()._id==userinfo.user.userArray.id)
    //     // const idMap = {};
    //     // console.log("kjvcm,.",myMsg);
    //     // myMsg.forEach((msgs)=>{
    //     //   console.log("msgs",msgs.data().user._id);
    //     //   if (idMap[msgs.data().user._id]) {
    //     //     idMap[msgs.data().user._id].push(msgs.data());
    //     //   }else{
    //     //     idMap[msgs.data().user._id] = [msgs.data()];

    //     //   }
    //     // })
    //     // const resultArrays = Object.values(idMap);
    //     // setData(resultArrays)
    //     // console.log("dfsjf",resultArrays);
    //     // // myMsg.forEach((msgs)=>{
    //     // //   console.log("msgs",msgs);
    //     // //   if (idMap[msgs.data().senderId]) {
    //     // //     idMap[msgs.data().senderId].push(msgs.data());
    //     // //   } else {
    //     // //     idMap[msgs.data().senderId] = [msgs.data()];
    //     // //   }
    //     // // })
    //     // // const resultArrays = Object.values(idMap);

    //     // // setMessages(
    //     // //     querySnapshot.docs.map(doc => ({
    //     // //         _id: doc.data()._id,
    //     // //         createdAt: doc.data().createdAt.toDate(),
    //     // //         text: doc.data().text,
    //     // //         user: doc.data().user
    //     // //     }))
    //     // // );
    // });
    return unsubscribe;
  }, []);  // console.log(messages.messages.messagesArray[0][0]);

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
    console.log("message",message);
    // navigation.navigate("chat", { participant: message.senderId });
 navigation.navigate("chat", { participant: message.sendTo==userinfo.user.userArray.id?message.sendBy:message.sendTo, name: message.name&&message.name, image: message.image&&message.image  });

  };

  // Render each message item
  // const renderMessageItem = ({ item }) => {
  //   let milliseconds = item.data().createdAt.seconds * 1000 + Math.round(item.data().createdAt.nanoseconds / 1e6);

  //   const date = new Date(milliseconds);


  //   console.log("item", item);
  //   return (
  //     <Text>
  //       dflkjafdkl
  //     </Text>
  //     // <TouchableOpacity
  //     //   onPress={() => handleMessagePress(item)}
  //     //   style={styles.messageItem}
  //     // >
  //     //   <Text
  //     //     style={{
  //     //       textAlign: 'right'
  //     //     }}
  //     //   >


  //     //     {JSON.stringify(date).substring(1, JSON.stringify(date).length - 15)}
  //     //   </Text>

  //     //   <View style={styles.messageContent}>
  //     //     <Text style={styles.sender}>{item.sender}</Text>
  //     //     <Text style={styles.content}>{item.data().text}</Text>
  //     //   </View>
  //     //   <Image source={require("./assets/pp.png")} style={styles.profileImage} />
  //     // </TouchableOpacity>
  //   )
  // }

  return (
    <View style={styles.container}>
      <ScrollView

      >
        {data[0] &&

          data.map((item) => {
      var date = new Date(item[0].createdAt);
            return (
              <TouchableOpacity
                onPress={() => handleMessagePress(item[0])}
                style={styles.messageItem}
              >
                <Text
                  style={{
                    textAlign: 'right'
                  }}
                >
                  {JSON.stringify(date).slice(1,11)}

                </Text>
                <View style={styles.messageContent}>
                  <Text style={styles.sender}>{item[0].name && item[0].name}</Text>
                  <Text style={styles.content}>{item[0].msg}</Text>
                </View>
                <Image source={item[0].image ? { uri: item[0].image } : require("./assets/pp.png")} style={styles.profileImage} />


              </TouchableOpacity>
            )
          })
        }
      </ScrollView>


      {/* <FlatList
        data={messages.messages.messagesArray[0][0]} // Reverse the order of messages
        keyExtractor={(item) => item.data().user.toString()}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.flatListContent}
      /> */}
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
