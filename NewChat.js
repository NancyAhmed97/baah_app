import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useDispatch, useSelector } from "react-redux";
//  import firestore from '@react-native-firebase/firestore';
import { db } from "./Firebase-config";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    doc,
    orderBy,
} from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const NewChat = ({ route }) => {
    const [messages, setMessages] = useState([])
    const userinfo = useSelector((state) => state);
    const { participant } = route.params;
    const { image } = route.params;
    const { name } = route.params;
    const navigation = useNavigation();

    useEffect(() => {





        const docRef3 = doc(db, "chats", userinfo.user.userArray.id + participant);
        const colRef = collection(docRef3, "messages")



        const q = query(colRef);




        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe', querySnapshot.docs);
            const allMsgs = querySnapshot.docs.map(item => {
                return { ...item.data().myMsg, createdAt: item.data().myMsg.createdAt }
            })

            setMessages(allMsgs)
        })

        return () => unsubscribe();
    }, [])
    const onSend = useCallback((messages = []) => {
        console.log(messages[0]);
        const msg = messages[0]
        const myMsg = {
            ...msg,
            sendBy: userinfo.user.userArray.id,
            sendTo: participant,
            createdAt: Date.parse(msg.createdAt)            
        }
        const myMsgList = {
            name:name,
            image:image,
            msg:messages[0].text,
            sendBy: userinfo.user.userArray.id,
            sendTo: participant,
            createdAt: Date.parse(msg.createdAt)            
        }

        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, myMsg),
        )
        const docRef = doc(db, "chats", '' + userinfo.user.userArray.id + participant);
        const colRef = collection(docRef, "messages")
        addDoc(colRef, {
            myMsg
        });



        const docRef1 = doc(db, "chats", '' + participant + userinfo.user.userArray.id);
        const colRef1 = collection(docRef1, "messages")
        addDoc(colRef1, {
            myMsg
        });


    addDoc(collection(db, 'messagesList'), myMsgList)
    }, [])
    return (
        <>
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
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: userinfo.user.userArray.id,
                }}
            />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'right',
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
        zIndex: 77777777777777777777777777
    },

});
export default NewChat