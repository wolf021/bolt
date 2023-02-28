//import liraries
import React, { Component,memo } from 'react';
import { View, Text, StyleSheet,Animated,useWindowDimensions } from 'react-native';

// create a component
const index =  ({data,scrollX,color}) => {

const {width} = useWindowDimensions()

    return (
        <View style={{flexDirection:"row",height:44}}>
            {data.map((_,i) =>{
                const inputRange = [(i -1)* width,i*width ,(i+1)*width]


                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20,10],
                    extrapolate: 'clamp',
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3,1,0.3]
                })

                return <Animated.View style={[styles.dot,{width:dotWidth,opacity,},
                {backgroundColor:color}]} key={i.toString()} /> 
            })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    dot: {
        height:10,
        borderRadius:5,
       
        marginHorizontal:8
    },
});

//make this component available to the app
export default memo(index);
