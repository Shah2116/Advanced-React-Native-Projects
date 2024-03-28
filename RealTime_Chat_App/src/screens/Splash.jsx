import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Loader from '../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() =>(
        setTimeout(()=>(
          checkLogin()
          // navigation.navigate('Login')
        ),2000)
    ),[]);


    const checkLogin = async () => {
      try {
      const id = await AsyncStorage.getItem("userId");
        if(id){
          navigation.navigate('Home')
        }else{
          navigation.navigate('Login')
        }
      }
      catch {
        console.error('error')
      }
    }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, textAlign:'center',color:'#fff'}}>{`RealTime Firebase\nChat App`}</Text>
      <Loader />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'grey',
        justifyContent:'center',
        alignItems: 'center',
    }
})