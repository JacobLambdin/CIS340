import React from 'react';
import { Text, TextInput, View } from 'react-native';

function MySecondReactApp() {
  return (
    <View>
      <Text>
         Hello I am a student it CIS340! 
        </Text>
    </View>
        
  );
}

export default function MultiComp(){
  return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text> {"\n\n\n\n\n\n\n"} Welcome to my class</Text>
      <MySecondReactApp />
      <MySecondReactApp />
      <MySecondReactApp />
      <MySecondReactApp />
    </View>
  )
}
