import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'
import Signup from '../screens/Signup'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} 
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen name='Signup' component={Signup} 
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default AppNavigator