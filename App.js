import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellow}/>
      <View style={styles.blue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  yellow : {
    flex : 1,
    backgroundColor : "yellow"
  },
  blue : {
    flex : 1,
    backgroundColor : "blue"
  }
});

// div > View
// span > Text 모든 부분 Text 요구