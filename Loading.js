import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Getting the funcking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "flex-end",
    paddingHorizontal : 30,
    paddingVertical : 100,
    backgroundColor : "#FDF6AA"
  },
  text: {
      color : "#2c2c2c",
      fontSize : 20
  }
});

// div > View
// span > Text 모든 부분 Text 요구