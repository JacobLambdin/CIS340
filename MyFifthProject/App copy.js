
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Open up App.js to start working on your app!</Text>
      <Text style={[styles.yellow, styles.largeGreen]}> Yellow Text, then Big Green Text</Text>
      <Text style={[styles.largeGreen, styles.yellow]}> Big Green Test, then Yellow  Text</Text>

    </View>
  );
}

const styles = StyleSheet.create({
container:{

  marginTop: 60,
},
largeGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20
},

yellow: {
  color: 'yellow',
  fontSize: 10
}

});
