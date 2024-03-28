import { Dimensions, Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'


const Users = () => {
    const navigation = useNavigation()
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async() => {
        const tempData = []
        const email = await AsyncStorage.getItem('Email')
       firestore()
       .collection('users')
       .where('email',"!=", email)
       .get()
       .then((res) => {
        if(res != []){
            res.docs.map((item) => (
                tempData.push(item.data())
            ))
        }
        setUsers(tempData)
       })
       
    } 

  return (
      <View style={styles.mainContainer}>
          <View style={styles.header}>
              <Text style={styles.headerText}>RN Firebase Chat App</Text>
          </View>
          <TouchableOpacity onPress={() => (navigation.navigate('Chat'))}>
            <FlatList
            data={users}
            renderItem={({item}) => 
            <View style={styles.userItems}>
            <Image source={require('../assets/images/user.png')} style={styles.userImage}/>
            <Text style={styles.userName}>
                {item.name}
            </Text>
            </View>}
             />
          </TouchableOpacity>
      </View>
  )
  
}

export default Users

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 70,
        width: '100%',
        elevation: 5,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color:'#000',
    },
    userItems: {
       width: Dimensions.get('window').width-50,
    // width: '100%',
       marginTop:20,
       height: 60,
       borderWidth: 1,
       borderRadius: 10,
       borderColor: '#000',
       flexDirection:'row',
       alignSelf:'center',
       padding:10,
    },
    userImage: {
        height: 40,
        width: 40,
    },
    userName: {
        fontSize: 22,
        alignSelf: 'center',
        marginHorizontal: 10,
        color: '#000'
    }
})