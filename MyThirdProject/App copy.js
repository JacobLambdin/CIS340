import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text>Hey,  I am {props.name} and I am a student in CIS 340</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS 340! </Text>
      <Student name="Jacob Lambdin"/>
      <Student name="Bob #####"/>
      <Student name="Ramadan Abdunabi"/>
      </View>
  );
}
