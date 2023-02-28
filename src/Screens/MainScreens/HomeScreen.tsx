//import liraries
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-virtualized-view"

import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import { categories, products } from "../../../dummy"
import { onBoard } from "../../../onBoardingData"
import ProductCard from "../../Components/ProductCard"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = ({ navigation }) => {

    const saleItems = products.filter(item => item.sale)
    const catagoriesItems = categories


  return (
    <View
      style={{
        flex: 1,
        paddingTop: 60,
        paddingBottom: 60,
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            
            paddingHorizontal:20
          }}
        >
          <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate("SearchScreen")} >
          <View 
            style={{
              backgroundColor: "transparent",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              flexDirection: "row",
              paddingLeft: 30,
              borderRadius: 40,
              marginVertical: 20,
              marginHorizontal: 10,
            }}
          >
            <Ionicons name="search" size={24} color="black" />
            <Text
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "transparent",
              }}
              
            >Search</Text>
          </View>
          </TouchableOpacity>
          <Ionicons name="menu" size={40} color="black" />
        </View>
        <ScrollView style={{ marginBottom: 20 }}>
          <View style={{ justifyContent: "space-between", width: "100%" }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={categories}
              horizontal
              renderItem={({ item }) => (
                <View
                  style={{
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    margin: 15,
                  }}
                >
                  <TouchableOpacity onPress={()=> navigation.navigate("CategoriesScreen",{
                        catagoriesItems:item
                      }) } activeOpacity={0.9}>
                    <View
                      style={{
                        backgroundColor: "#DFDFDF",
                        height: 80,
                        width: 80,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        elevation: 4,
                      }}
                    >
                      <Image style={{height:"100%", width:"100%", resizeMode:"cover"}} source={item.image} />
                    </View>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                </View>
              )}
            />
          </View>
          <TouchableOpacity  activeOpacity={0.7}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#DFDFDF",
                width: "95%",
                alignSelf: "center",
                padding: 10,
                alignContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="pricetag" size={50} color="black" />
              <View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  75% Off
                </Text>
                <Text style={{ fontSize: 15 }}>on All Bags & Shoes</Text>
              </View>
              <FontAwesome5 name="angle-right" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "95%",
              backgroundColor: "black",
              height: 2,
              alignSelf: "center",
              marginVertical: 10,
            }}
          ></View>

          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Items On Sale</Text>
            <View>
              <FlatList
                numColumns={2}
                keyExtractor={(item) => item.name}
                data={saleItems}
                renderItem={({ item }) => (
                  <ProductCard
                  image ={item.images[0]}
                    Name={item.name}
                    Price={item.price}
                    sale={item.sale}
                    onPress={() =>
                      navigation.navigate("ProductScreen", {
                        productsObj: item,
                      })
                    }
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
})

//make this component available to the app
export default HomeScreen
