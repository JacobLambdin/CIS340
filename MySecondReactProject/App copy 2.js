import React from 'react';
import { Text } from 'react-native';

export default function MySecondReactApp() {

  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }
  const pet = "Dog"
  return (
      <Text>
        {"\n\n\n\n\n\n\n"}
           Hello I am a student it CIS340! {"\n"}
           My full name is {getFullName("Jacob", "Kelly","Lambdin")} {"\n"}
           I have a pet {pet}!
        </Text>
        
  );
}


