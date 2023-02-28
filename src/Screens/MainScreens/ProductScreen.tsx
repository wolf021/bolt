//import liraries
import React, { Component, useState,useRef, useEffect, useCallback } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { FontAwesome5 } from "@expo/vector-icons"
import { Dimensions } from "react-native"
import Paginator from '../../Components/Paginator'
import {products} from "../../../dummy.js"


const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

// create a component
const ProductScreen = ({ route,navigation }) => {
  const [imge, setImge] = useState([])
  const [items, setItems] = useState({})
  const item = route.params.productsObj
  const imager = item.images
  
  useEffect(()=>{
    

      
      
      setItems(item)
      setImge(imager)
      console.log(imge)
      console.log(items)
  
    
    
  },[])
   
    
    const ref = useRef()
    const scrollX = useRef(new Animated.Value(0)).current
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
    }).current
    
    const onBoardRef= useRef(null)
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

    

    const Carousel = useCallback(()=>(
      <View >
            
            <FlatList
            
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={imge}
              horizontal
              onScroll={Animated.event([{nativeEvent:{contentOffset:{x: scrollX}}}],{useNativeDriver:false})}
              
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              scrollEventThrottle={32}
              ref={onBoardRef}
              renderItem={({item}) => (
                

                  <View
                  style={{
                      backgroundColor: "transparent",
                      height: 400,
                      width: windowWidth * 0.8,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      elevation: 4,
                      marginHorizontal: windowWidth * 0.05,
                    }}
                    >
                  <Image
                  
                    style={{
                      resizeMode: "stretch",
                      height: "100%",
                      width: "100%",
                      borderRadius: 10,
                    }}
                    source={{ uri:item }}
                  />
                </View>
             
                
              )}
            />
            <View style={{justifyContent:"center",alignItems:"center",paddingTop:10}} >

          <Paginator data={imge} scrollX={scrollX} color="black" />
            </View>
          </View>
    ),[imge])
    
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={()=> navigation.goBack() } style={{ marginVertical: 2 }} activeOpacity={0.6}>
            <FontAwesome5 name="arrow-left" size={25} color={item.color} />
          </TouchableOpacity>

          <Carousel />

        </View >
        <View style={{ flex: 0.5, width: "100%", height: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "300" }}>
              {item.name}{" "}
            </Text>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                $ {item.price}
              </Text>
            </View>
          </View>
          {item.sale && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "300" }}>
                Sale Price{" "}
              </Text>
              <View style={{ marginTop: 10 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "red" }}
                >
                  $ {item.sale}
                </Text>
              </View>
            </View>
          )}
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "400", marginBottom: 10 }}>
              Description
            </Text>
            <Text>{item.description}</Text>
          </View>
          {
            item.size &&
         
          <View style={{}}>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>Sizes</Text>
            <View
              style={{
                marginVertical: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                width: "90%",
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: "#DFDFDF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 20 }}>XXs</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: "#DFDFDF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 20 }}>Xs</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: "#DFDFDF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 20 }}>S</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: "#DFDFDF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 20 }}>M</Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: "#DFDFDF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "600", fontSize: 20 }}>L</Text>
              </View>
            </View>
          </View>
           }
          <TouchableOpacity activeOpacity={0.7} onPress={()=>{
            navigation.navigate("CartScreen")
          }} style={{ marginVertical: 30 }}>
            <View
              style={{
                backgroundColor: "black",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
})

//make this component available to the app
export default ProductScreen
