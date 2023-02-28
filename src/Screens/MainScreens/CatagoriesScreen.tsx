//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../../dummy';
import ProductCard from "../../Components/ProductCard"

// create a component
const CatagoriesScreen = ({route,navigation}) => {
    const [data, setData] = useState([])
    const [heading, setHeading] = useState("")
    useEffect(() => {
        const catagory = route.params.catagoriesItems
   
        const filteredData = products.filter(item => item.category === catagory.name)
        setData(filteredData)
        setHeading(catagory.name)
        
        console.log(data)
        
        
    
      
    }, [])
    
   
    return (
        <SafeAreaView style={{flex:1}} >

        <View style={styles.container}>
            <View style={{width:"100%", height:50,justifyContent:"center",alignItems:"center"}} >
            <Text style={{ alignSelf: "center", fontSize: 25, color: "black" }}>
        {heading}
      </Text>
            </View>
            <FlatList numColumns={2} 
                keyExtractor={(item) => item.name} data={data} renderItem={({item})=> 
            <View  >
                 
                
                <ProductCard Name={item.name} image={item.images[0]} Price={item.price} sale={item.sale}
                    onPress={() =>
                      navigation.navigate("ProductScreen", {
                        productsObj: item,
                      })} />
            </View>
        } />
        </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default CatagoriesScreen;
