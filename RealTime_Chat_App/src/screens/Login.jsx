import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    const userLogin = () => {
     data =firestore().collection('users').where('email','==', email).get().then(
        (res) => {
            console.log(JSON.stringify(res.docs[0].data()));
            goToNext(
                res.docs[0].data().name,
                res.docs[0].data().email,
                res.docs[0].data().userId
                )
        }
     ).catch((error) => {
        console.log(error)
     })
    }

    const goToNext= async (name, email, userId ) => {
       await AsyncStorage.setItem("Name", name);
       await AsyncStorage.setItem("Email", email);
       await AsyncStorage.setItem("userId", userId);
       navigation.navigate("Home")
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.headingText}>Login</Text>
                
                <TextInput
                    placeholder='Enter Eamil'
                    style={styles.inputText}
                      value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Enter Password'
                    style={styles.inputText}
                      value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    return userLogin()
                }}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: '#000' }}>or</Text>
                <TouchableOpacity>
                    <Text style={styles.loginBtn} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    },
    container: {
        flex:1,
        margin:20,
        marginTop: 70,
    },
    headingText: {
        fontSize: 40,
        fontWeight: '600',
        marginBottom: 20,
        color: '#000',
        alignSelf:'center',
    },
    inputText: {
        height:50,
        width:'100%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        paddingHorizontal: 10,
        fontSize: 15,
    },
    btn: {
        width: '100%',
        height: 50,
        marginTop: 50,
        borderRadius: 10,
        backgroundColor: 'grey',
        alignItems:'center',
        justifyContent:'center',
    },
    btnText: {
       alignSelf: 'center',
       fontSize: 20,
       color: '#fff',
    },
    loginBtn: {
        alignSelf: 'center',
        fontSize: 25,
        textDecorationLine:'underline',
        textDecorationColor:'#000',
    }

})