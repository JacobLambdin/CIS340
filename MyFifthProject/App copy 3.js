
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, height: 40, backgroundColor: 'red'}}/>
      <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}/>
      <View style={{flex: 1, height: 100, backgroundColor: 'blue'}}/>
    </View>
  );
}


