//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet,TextInput,FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { products } from '../../../dummy';
import debounce from 'lodash.debounce'
import ProductCard from "../../Components/ProductCard"



// create a component
const SearchScreen = ({navigation}) => {
  
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  const [catagoryFilter, setCatagoryFilter] = useState(false)
  const [catagoryButton, setCatagoryButton] = useState("grey")
  const filter = false

    
    const HandleSearch = debounce( (input) =>{
      if(filter){
        const filteredData = products.filter((item) =>
      item.category.toLowerCase().includes(query.toLowerCase()))
      console.warn("item")
    setData(filteredData)
      } else{

        const filteredData = products.filter((item) =>
        item.description.toLowerCase().includes(query.toLowerCase()))
        console.warn("item")
    setData(filteredData)

      }
   
   
   },400)


    return (
        <SafeAreaView style={styles.container}>
           <View
          style={{
            flexDirection: "row",
            paddingHorizontal:10
            
            
            
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
              paddingLeft: 30,
              borderRadius: 40,
              marginVertical: 20,
             
            }}
          >
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "transparent",
              }}
              placeholder="Search"
              placeholderTextColor="black"
              onChangeText={(input)=>{
                setQuery(input)
                HandleSearch(input)
              }}
              value={query}


            />
          </View>
           
          </View>
      
          
        <View style={{backgroundColor:"white", width:"100%",height:"100%"}} >

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
export default SearchScreen;
