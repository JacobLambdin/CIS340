import React from 'react';
import {Text, View, SectionList } from 'react-native';

export default  StatesApp = () =>{
  return(
    <View style={{flex: 1, paddingTop:22}}>
      <SectionList
        sections={[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arkansas']}
        ]}

        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, heigh: 44}}> {item} </Text>}
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft: 10, paddingRight: 10, paddingBottom: 4, 
        fontSize: 14, 
        fontWeight: 'bold', 
        backgroundColor: '#9Fa8DA',}}>{section.title}</Text>}
        keyExtractor={(item,index) =>index}
        />
    </View>
  );
  }

