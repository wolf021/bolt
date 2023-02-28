//import liraries
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"

// create a component
const WishListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ alignSelf: "center", fontSize: 25, color: "black" }}>
        WishList
      </Text>
      <TouchableOpacity activeOpacity={0.7}>
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
            marginVertical: 20,
          }}
        >
          <Ionicons name="pricetag" size={50} color="black" />
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>75% Off</Text>
            <Text style={{ fontSize: 15 }}>on All Bags & Shoes</Text>
          </View>
          <FontAwesome5 name="angle-right" size={40} color="black" />
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{ backgroundColor: "white", flex: 0.5 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginVertical: 10,
            borderBottomWidth: 1,
            borderColor: "black",
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              backgroundColor: "#DFDFDF",
            }}
          >
            <Image
              style={{ width: "90%", height: "100%", resizeMode: "contain" }}
              source={require("../../../assets/image.png")}
            />
          </View>
          <View>
            <Text>Premium Weight Reveald</Text>
            <Text style={{ fontWeight: "700" }}>$ 30.99</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <View
              style={{
                backgroundColor: "black",
                paddingHorizontal: 10,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
})

//make this component available to the app
export default WishListScreen
