import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import HomeScreen from '../Screens/MainScreens/HomeScreen'



       
const index = () => {
    const Stack = createStackNavigator()
    const [isLogin, setIsLogin] = useState(true)
    
  return (
    <NavigationContainer>
        {
            isLogin ? <MainNavigator/> : <AuthNavigator/>
        }
    </NavigationContainer>
  )
}

export default index