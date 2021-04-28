import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TOuchableButton extends Component() {
  _onPressButton(){
    alert('You pressed a button')
  }
  render(){
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButton}>
    <Button
      onPress={this._onPressButton}
      title = "Press Button 1"
      />
      </View>

      <View style={styles.containerLayoutButton}>


      <Button
      onPress={() =>{
        alert('You tapped  button 2');
      }}
      title = "Press Button 2"
      />


      
<Button
      onPress={() =>{
        alert('You tapped  button 3 - Great!');
      }}
      title = "Great!"
      color = 'green'
      />

      </View>


      <View style={styles.containerButton}>
        
      <Button
      onPress={() =>{
        alert('You tapped  me!');
      }}
      title = "Tap me!"
      />
      </View>


    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyCOntent: 'space-between'
  }
});
