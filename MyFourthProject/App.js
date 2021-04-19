import React from 'react';
import {Text, View, Image, ScrollView } from 'react-native';


const dog = {
  uri: '',
  width: 64,
  height: 64
};

export default  MyScrollViewApp = () =>{
  
  
   <ScrollView style={{padding: 40}}>
     <Text style = {{fontSize: 80}}> 
     Try to scroll down
     </Text>
     <Image source={require('./assts/icon.png')} style={{width: 64, height: 64}}/>
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Text style = {{fontSize: 80}}> 
     Try to scroll down, again
     </Text>
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />
     <Image source={{dog}} />



   </ScrollView>
  ;
  }

