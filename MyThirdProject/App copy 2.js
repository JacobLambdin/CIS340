import React from 'react';
import { Image, Text, View } from 'react-native';

export default function MyDog() {
  let pic = {url: "https://static.wikia.nocookie.net/dogelore/images/2/26/Walter.png/revision/latest?cb=20190617095152"};
  return (
    <View style ={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Image source={pic} 
      style = {{width: 150, height: 150}}></Image>
    </View>
  );
}


