//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/MainScreens/HomeScreen';
import WishListScreen from '../Screens/MainScreens/WishListScreen';
import ShoppingCartScreen from '../Screens/MainScreens/ShoppingCartScreen';
import ProfileScreen from "../Screens/ProfileScreens/ProfileScreen"
import ProductScreen from '../Screens/MainScreens/ProductScreen';
import Lottie from 'lottie-react-native';
import { scale } from "react-native-size-matters"
import {Dimensions} from 'react-native';
import CatagoriesScreen from '../Screens/MainScreens/CatagoriesScreen';
import SearchScreen from '../Screens/MainScreens/SearchScreen';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// create a component
const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home Screen' >
            <Stack.Screen name="HomeScreen" component={BottomTab} options={{headerShown:false}} />
            <Stack.Screen name="CategoriesScreen" component={CatagoriesScreen} options={{headerShown:false}} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown:false}} />
            <Stack.Screen name="CartScreen" component={ShoppingCartScreen} options={{headerShown:false}} />
        </Stack.Navigator>
       
    );
};

const BottomTab = () =>{


    const screenOptions = (route, color,focused) => {
        let iconName:any;
      
        switch (route.name) {
          case 'Home':
            iconName = require('../Components/Lottie/home.json');
            break;
          case 'Wishlist':
            iconName = require('../Components/Lottie/heart.json');
            break;
          case 'Cart':
            iconName = require('../Components/Lottie/cart.json');
            break;
          case 'Profile':
            iconName = require('../Components/Lottie/profile.json');
            break;
          default:
            break;
        }
      
        return <Lottie source={iconName} autoPlay={focused}  />;
      };
      
    return (
        <Tab.Navigator 
        
        screenOptions={({route}) => (  {
            
            tabBarIcon: ({color,focused}) => screenOptions(route, color,focused),
            
            tabBarStyle:{backgroundColor:"black",borderTopLeftRadius:scale(30),borderTopRightRadius:scale(30),borderRadius:(Platform.OS === 'ios') ? scale(40): scale(30),marginHorizontal:scale(10),alignSelf:"center",width:windowWidth *0.95,position:"absolute",height:scale(70),marginBottom:5, paddingBottom:20, paddingVertical:(Platform.OS === 'ios') ? scale(10): scale(10)},
            tabBarActiveTintColor:"#DFDFDF",
            
          })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name='Wishlist' component={WishListScreen} options={{headerShown:false}}  />
            <Tab.Screen name='Cart' component={ShoppingCartScreen} options={{headerShown:false}} />
            <Tab.Screen name='Profile' component={ProfileScreen}options={{headerShown:false}}  />
        </Tab.Navigator>
    )
}


export default MainNavigator;
