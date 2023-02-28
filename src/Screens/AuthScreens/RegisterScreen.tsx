//import liraries
import React, { Component, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image, Alert,Animated } from 'react-native';
import { scale } from 'react-native-size-matters';

// create a component
const RegisterScreen = () => {

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
            <View style={{alignItems:"center", justifyContent:"center", flex:0.2}} >
                <Text style={{fontSize:45,color:"white"}} >Register Screen</Text>
            </View>
            <Animated.View style={{flex:1, backgroundColor:"white", borderRadius:8, paddingHorizontal:10, paddingTop:scale(30), top:translateAnim}} >
                <View style={{marginVertical:scale(10)}} >
                    <Text >Name</Text>
                <TextInput style={{backgroundColor:"white", padding:scale(7) ,borderWidth:1, marginTop:scale(10) }}  placeholder="Re-type Passowrd" />
                </View>
                <View style={{marginVertical:scale(10)}}>
                    <Text>Email</Text>
                <TextInput style={{backgroundColor:"white", padding:scale(7) ,borderWidth:1, marginTop:scale(10) }}  placeholder="Re-type Passowrd" />
                </View>
                <View style={{marginVertical:scale(10)}}>
                    <Text>PassWord</Text>
                <TextInput style={{backgroundColor:"white", padding:scale(7) ,borderWidth:1, marginTop:scale(10) }}  placeholder="Re-type Passowrd" />
                </View>
                <View style={{marginVertical:scale(10)}}>
                    <Text>Re-type PassWord</Text>
                <TextInput style={{backgroundColor:"white", padding:scale(7) ,borderWidth:1, marginTop:scale(10) }}  placeholder="Re-type Passowrd" />
                </View  >
                <View>
                    <Text style={{color:"black", fontSize:15,top:scale(10)}} >Already Registered? <Text onPress={()=> Alert.alert("login")} style={{color:"blue"}} >Login</Text> </Text>
                </View>
                <TouchableOpacity style={{marginVertical:scale(30)}} >

                <View style={{backgroundColor:"blue",width:"100%" ,alignItems:"center",paddingVertical:scale(10), borderRadius:10, elevation:20, shadowColor:"black",  }} >
                    <Text style={{color:"white", fontSize:25}} >Register</Text>
                </View>
                </TouchableOpacity>
                <View style={{marginVertical:scale(5)}} >
                    <Text style={{fontSize:15}} >You Can Register By Following </Text>
                </View>
                <View style={{ flexDirection:"row", justifyContent:"space-evenly",marginVertical:scale(20)}} >
                <TouchableOpacity>
                    
                    <View style={{height:scale(60) , width:scale(60),borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
                        <Image   source={require('../../../assets/google.png')} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <View style={{height:scale(60), width:scale(60),borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
                        <Image  source={require('../../../assets/facebook.png')} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <View style={{height:scale(60), width:scale(60),borderRadius:10,borderWidth:3,borderColor:"black",justifyContent:'center', alignItems:"center"}} >
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
        justifyContent: 'flex-end',
        
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default RegisterScreen;
