import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() =>(
        setTimeout(()=>(
            navigation.navigate('Signup')
        ),2000)
    ),[])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, textAlign:'center',color:'#fff'}}>{`RealTime Firebase\nChat App`}</Text>
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