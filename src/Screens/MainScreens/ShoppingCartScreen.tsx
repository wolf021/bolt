//import liraries
import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome5 } from "@expo/vector-icons"
import { scale } from "react-native-size-matters"

// create a component
const ShoppingCartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{ alignSelf: "center", fontSize: scale(25), color: "black" }}
      >
        Cart
      </Text>
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
              height: scale(80),
              width: scale(80),
              borderRadius: 10,
              backgroundColor: "#DFDFDF",
            }}
          >
            <Image
              style={{ width: "90%", height: "100%", resizeMode: "contain" }}
              source={require("../../../assets/image.png")}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              height: "70%",
              justifyContent: "space-between",
            }}
          >
            <Text>Premium Weight Reveald</Text>
            <Text style={{ fontWeight: "700" }}>$ 30.99</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <FontAwesome5 name="minus" size={24} color="black" />
            <Text style={{ fontWeight: "600", fontSize: scale(20) }}>01</Text>
            <FontAwesome5 name="plus" size={24} color="black" />
          </View>
        </View>
      </ScrollView>
      <View style={{ flex: scale(0.6), borderTopWidth: 3 }}>
        <Text
          style={{
            marginVertical: scale(9),
            alignSelf: "center",
            fontSize: scale(20),
            fontWeight: "700",
          }}
        >
          Order Info
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>SubTotal</Text>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>$ 300</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Delivery</Text>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>$ 50</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>$ 350</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={{
              backgroundColor: "black",
              height: scale(50),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Place Order</Text>
          </View>
        </TouchableOpacity>
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
export default ShoppingCartScreen
