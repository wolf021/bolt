//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import RegisterScreen from '../Screens/AuthScreens/RegisterScreen';
import OnBoardingScreen from '../Screens/AuthScreens/OnBoardingScreen';

const isUser = false
// create a component
const AuthNavigator = () => {
    const Stack = createStackNavigator()
    return (
      <Stack.Navigator   >
        
        {
          isUser ? 
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}  />
         : 
         <>
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen  } options={{headerShown:false}}  />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}  />
         </>
        }
       
      </Stack.Navigator>
        
    );
};


export default AuthNavigator;
