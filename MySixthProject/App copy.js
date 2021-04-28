import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const csuLogo = {
  uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png",
  width: 50,
  height: 50
}




  return (
    <View style={styles.container}>
    
      <Image
        style={styles.localCSULogo}
        source={required('./assets/icon.png')}
      />

      <Image
        style={styles.urlCSULogo}
        source={{uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png"
      } }
      />


      <Image style = {styles.stretch} source={{csuLogo}}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localCSULogo:{
    width: 55,
    height: 65,
  },
  urlCSULogo: {
    width: 50,
    height: 50
  },
  stretch: {
    width: 80,
    height: 50,
    resizeMode: 'contain'
  }
});
