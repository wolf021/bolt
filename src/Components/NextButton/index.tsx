//import liraries
import React, { Component, useEffect, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native"
import Svg, { G, Circle } from "react-native-svg"
import { FontAwesome5 } from "@expo/vector-icons"

// create a component
const index = ({ percentage,scrollTo }) => {
  const size = 128

  const strokeWidth = 2

  const center = size / 2

  const radius = size / 2 - strokeWidth / 2

  const circumference = 2 * Math.PI * radius

  const progressAnimation = useRef(new Animated.Value(0)).current
  const progressRef = useRef(null)



  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    animation(percentage)
  }, [percentage])

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        })
      }
    })
  }, [percentage])

  return (
    <View style={styles.container}>
      <Svg fill="none" width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="lightgrey"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="blue"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button}>
        <FontAwesome5 name="arrow-right" size={32} color="white" />
      </TouchableOpacity>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "blue",
    borderRadius: 100,
    padding: 20,
  },
})

//make this component available to the app
export default index
