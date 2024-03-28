import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screens/Splash'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Users from '../tabs/Users'
import Settings from '../tabs/Settings'

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
          <Stack.Screen name='Login' component={Login}
              options={{
                  headerShown: false
              }}
          />
          <Stack.Screen name='Home' component={Home}
              options={{
                  headerShown: false
              }}
          />
          <Stack.Screen name='Users' component={Users}
              options={{
                  headerShown: false
              }}
          />
          <Stack.Screen name='Settings' component={Settings}
              options={{
                  headerShown: false
              }}
          />
      </Stack.Navigator>
  )
}

export default AppNavigator