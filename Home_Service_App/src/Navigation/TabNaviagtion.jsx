import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import BookingScreen from '../Screens/Booking/BookingScreen'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Color from '../Utils/Color'

const Tab = createBottomTabNavigator()

const TabNaviagtion = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.PRIMARY
    }}>
        <Tab.Screen name='Home' component={HomeScreen}
        options={{
            tabBarLabel:({color}) => 
            (<Text style={{color:color, fontSize:12}}>Home</Text>
            ),
            tabBarIcon:({color,fontSize}) => (
                <FontAwesome name="home" size={fontSize} color={color}/>
            )}
        } />
        <Tab.Screen name='Booking' component={BookingScreen} 
            options={{
                tabBarIcon: ({color, fontSize}) => (
                    <FontAwesome name='bookmark' size={fontSize} color={color} />
                )
            }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen} 
            options={{
                tabBarIcon: ({color, fontSize}) => (
                    <FontAwesome name='user-circle' size={fontSize} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNaviagtion