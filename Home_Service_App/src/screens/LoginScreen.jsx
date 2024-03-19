import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Color from '../utils/Color'

const LoginScreen = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('../assets/images/login.png')} style={styles.loginImage} />
      <View style={styles.subContainer}>
        <Text style= {{fontSize: 27, color: Color.WHITE, textAlign:'center'}}>
            Let's Find
            <Text style={{fontWeight:'bold'}}>
             Professional Cleaning and Repair
            </Text>
             Service
        </Text>
        <Text style= {{fontSize:17, color:Color.WHITE, marginTop:20, textAlign:'center'}}>Best App to find services near you which deliver you professional service </Text>
        <TouchableOpacity style={styles.button}>
          <Text style = {{color: Color.PRIMARY, textAlign:'center'}}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginImage: {
        height:450,
        width: 230,
        marginTop:70,
        borderWidth: 4,
        borderColor: Color.BLACK,
        borderRadius: 15,
    },
    subContainer: {
      width: "100%",
      height: "70%",
      backgroundColor: Color.PRIMARY,
      marginTop:-20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20,
    },
    button: {
      padding:15,
      borderRadius: 99,
      backgroundColor: Color.WHITE,
      marginTop: 40,
    }

})