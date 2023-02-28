//import liraries
import React, { Component, useEffect, useRef, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native"
import Boarding1 from "../../../assets/boarding1.png"
import { Dimensions } from "react-native"
import { onBoard } from "../../../onBoardingData"
import Paginator from '../../Components/Paginator'
import NextButton from '../../Components/NextButton'

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
// create a component



const OnBoardingScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current
const [currentIndex, setCurrentIndex] = useState(0)
const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index)
}).current

const onBoardRef= useRef(null)
const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

const scrollTo = () => {
    if(currentIndex < onBoard.length-1){
        onBoardRef.current.scrollToIndex({index:currentIndex+1})
    } else{
        navigation.navigate("Register")
    }
}
const animeNext = useRef(new Animated.Value(200)).current


useEffect(() => {
 
    Animated.timing(animeNext, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
            
    }).start()

   

}, [])


return (
    <View style={styles.container}>
        <View style={{flex:0.9}} >
            
        
      <FlatList
        bounces={false}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x: scrollX}}}],{useNativeDriver:false})}
        data={onBoard}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={onBoardRef}
       showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: windowWidth }}>
            <View style={{ flex: 0.8, alignItems: "center" }}>
              <Image
                style={{ height: "100%", resizeMode: "cover", width: "100%" }}
                source={require("../../../assets/boarding1.png")}
              />
            </View>
            <View style={{ flex: 0.3 }}>
              <View
                style={{
                  height: "20%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
      </View>
      <Paginator data={onBoard} scrollX={scrollX} color="blue" />
      <Animated.View style={{top:animeNext}} >

      <NextButton scrollTo={scrollTo} percentage={(currentIndex +1)* (100/ onBoard.length) } />
      </Animated.View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    backgroundColor: "white",
  },
})

//make this component available to the app
export default OnBoardingScreen
