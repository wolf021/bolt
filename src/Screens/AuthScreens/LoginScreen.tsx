//import liraries
import React, { Component,useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button,Image, KeyboardAvoidingView,Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Google from '../../../assets/google.png'
import Facebook from '../../../assets/facebook.png'
import * as Apple from "../../../assets/apple.png"

// create a component
const LoginScreen = () => {

    const translateAnim = useRef(new Animated.Value(900)).current;


    useEffect(() => {
    
        Animated.timing(translateAnim, {
            toValue:0,
            duration:1000,
            useNativeDriver:false,
        }).start();
    
     
    }, [translateAnim])

    return (
        
        <View style={styles.container}>
            <View style={{flex:0.5, justifyContent:"center", alignItems:"center", width:"100%"}} >
                <Text style={{fontSize:50, color:"white"}} >Login Screen</Text>
            </View>
            <KeyboardAvoidingView></KeyboardAvoidingView>
            <Animated.View style={{width:"100%", paddingHorizontal:10, flex:0.8, backgroundColor:"white",borderRadius:20,justifyContent:"flex-start", paddingTop:"10%",top:translateAnim }} >
                <View  >
                <Text style={{fontSize:20,color:"black",}} >Login</Text>
                <TextInput style={{borderWidth:1, width:"100%", padding:10, backgroundColor:"white",marginBottom:10 }}  placeholder='Login' />
                </View>
                <View>
                <Text style={{fontSize:20,color:"black"}} >Password</Text>
                <TextInput style={{borderWidth:1, width:"100%", padding:10, backgroundColor:"white",marginBottom:10 }}  placeholder='Password' />
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={{color:"2542A6",fontSize:20 }} >Forgot Your Password?</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={{marginVertical:60}} >

                <View style={{justifyContent:"center", alignItems:"center",backgroundColor:"black", height:70, borderRadius:10}} >
                    <Text style={{color:"white",fontSize:20}} >Login</Text>
                </View>
                    </TouchableOpacity>
                
                <View style={{ flexDirection:"row", justifyContent:"space-evenly",marginVertical:30}} >
                <TouchableOpacity>
                    
                    <View style={{height:60, width:60,borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
                        <Image   source={require('../../../assets/google.png')} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <View style={{height:60, width:60,borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
                        <Image  source={require('../../../assets/facebook.png')} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <View style={{height:60, width:60,borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
                        <Image   source={require("../../../assets/apple.png")} />
                    </View>
                    </TouchableOpacity>
                    
                    
                </View>
                
            </Animated.View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input:{
        
    }
});

//make this component available to the app
export default LoginScreen;
