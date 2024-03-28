import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Users from '../tabs/Users'
import Settings from '../tabs/Settings'

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <View style={styles.container}>
    {selectedTab == 0 ? (<Users/>) : (<Settings />)}
      <View style={styles.bottom}>
        <TouchableOpacity style={[styles.tab, styles.selectedTabIcon]} onPress={() =>{
          setSelectedTab(0)
        }}>
         <Image source={require('../assets/images/users.png')} style={[styles.tabIcon,{tintColor: selectedTab == 0 ? '#fff': '#000'}]} />
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.tab}
        onPress={() => {
          setSelectedTab(1)
        }}>
        <Image source={require('../assets/images/setting.png')} style={[styles.tabIcon,{tintColor: selectedTab == 1 ? '#fff': '#000'}]} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  bottom: {
    position: 'absolute',
    backgroundColor:'grey',
    width: '100%',
    height: 70,
    bottom:0,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  tab: {
  height: '100%',
  width:'50%',
  justifyContent:'center',
  alignItems: 'center',
  },
  tabIcon: {
    height:30,
    width: 30,
  },
})