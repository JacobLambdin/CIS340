import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';

function TV(props) {
const [isOff,setIsOff] = useState(true);
return(
  <View>
    <Text>
    {"\n\n\n\n"}
      This is {props.name} TV, and it is {isOff ? "Off" : "TV is on"}
    </Text>
    <Button 
      onPress={() => {
      setIsOff(false);
    }}
    disable={!isOff}
    title={isOff ? "Turn me on, please!" : "Thank you!"}
    />
  </View>
);
}

export default function MultiComp(){
  return(
    <View>
      <TV name="LG"/>
      <TV name="SONY"/>
    </View>
  );
}




