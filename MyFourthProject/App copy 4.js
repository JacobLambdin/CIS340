import React from 'react';
import {Text, View, FlatList } from 'react-native';

export default  StatesApp = () =>{
  return(
    <View style={{flex: 1, paddingTop:22}}>
      <FlatList
        data={[
          {key: 'Alabama'},
          {key: 'Alaska'}
        ]}

        returnItem={({item}) => <Text style={{padding: 10, fontSize: 20, heigh: 44}}> {item.key} </Text>}
        
        />

    </View>



  );
  }

