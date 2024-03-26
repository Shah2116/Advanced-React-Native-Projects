import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation()

    const userRegistration = () => {
        const userId = uuid.v4()
        const usersCollection = firestore().collection('user').doc(userId).set({
            name: name,
            email: email,
            number: number,
            password: password,
            userId: userId,
        }).then((res)=> {
            console.log(res,"user created succesfully")
            navigation.navigate('Login')
    }).catch((error) =>console.error(error))
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.headingText}>Signup</Text>
                <TextInput
                    placeholder='Enter Name'
                    style={styles.inputText}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    placeholder='Enter Eamil'
                    style={styles.inputText}
                      value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Enter Mobile Number'
                    style={styles.inputText}
                    keyboardType='number-pad'
                      value={number}
                    onChangeText={(text) => setNumber(text)}
                />

                <TextInput
                    placeholder='Enter Password'
                    style={styles.inputText}
                      value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    placeholder='Enter Confirm Password'
                    style={styles.inputText}
                      value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.btn} onPress={() =>{
                    return userRegistration()
                }}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', marginVertical: 20, fontSize: 20, color: '#000' }}>or</Text>
                <TouchableOpacity>
                    <Text style={styles.loginBtn} onPress={()=> navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup

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