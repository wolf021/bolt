//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Girl from '../../../assets/image.png'
import {Ionicons,FontAwesome5} from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';


type ProductCardProps = {
    Name: string,
    sale?: number,
    Price: number,
    onPress:any,
    image?:any
}

// create a component
const Index = (props:ProductCardProps) => {
    return (
<TouchableOpacity onPress={props.onPress} activeOpacity={0.9} >
        <View style={styles.container}>


            <View style={{backgroundColor:"#DFDFDF",height:250, width:"100%",borderRadius:10,marginBottom:10,justifyContent:"center",alignItems:"center"}} >
                {
                    props.sale ? 
                    <Text style={{fontWeight:"bold",zIndex:10, position:"absolute", top:10,left:0,backgroundColor:"black",color:"white" ,padding:5,borderRadius:3}} >sale</Text>
                    : ""
                }
                
            <Ionicons style={{position:"absolute",zIndex:10,top:10,right:10 }} name="heart" size={24} color="black" />
            <Image style={{height:"100%", width:"100%", resizeMode:"stretch"}} source={{uri:props.image} }/>
            </View  >
                <View style={{width:"100%",  justifyContent:"space-between" ,flexDirection:"row-reverse",alignItems:"center"}} >
                <FontAwesome5 name="plus" size={24} color="black" />
            <View>
            <Text style={{fontSize:15,fontWeight:"500"}} >{props.Name}</Text>
            <Text style={{fontSize:15,fontWeight:"bold"}} >${props.Price}</Text>
            </View>
                </View>
                
        </View>
                </TouchableOpacity>           
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical:10,
        width:180,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
        
    },
});

//make this component available to the app
export default Index;
