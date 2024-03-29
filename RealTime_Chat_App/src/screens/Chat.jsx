import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import {GiftedChat} from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';

const Chat = () => {
  const route = useRoute()
    const [messages, setMessages] = useState([])
    useEffect(() => {
       const subscriber = firestore()
       .collection('chats')
       .doc(route.params.id + route.params.data.userId)
       .collection('messages')
       .orderBy('createdAt','desc')
       subscriber.onSnapshot(querysnapshot => {
        const allMessages = querysnapshot.docs.map((item) => {
          return {
            ...item._data,
            createdAt: item._data.createdAt
        }})
        setMessages(allMessages)
       })
       return () => subscriber();
      }, [])

      const onSend = useCallback((messages = []) => {
        const msg = messages[0]
        const myMsg = {
          ...msg,
          sendBy: route.params.id,
          sendTo: route.params.data.userId,
          createdAt: Date.parse(msg.createdAt)
        }
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, myMsg),
        );
        firestore()
        .collection('chats')
        .doc(''+route.params.id+route.params.data.userId)
        .collection('messages')
        .add(myMsg)
        firestore()
        .collection('chats')
        .doc(''+route.params.data.userId+route.params.id)
        .collection('messages')
        .add(myMsg)
      }, [])

  return (
    <View style={{flex:1}}>
      <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: route.params.id,
      }}
    />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})