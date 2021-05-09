
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';// import
import * as Sharing from 'expo-sharing';

export default function App() {

const [selectedImage, setSelectedImage ] = React.useState(null)


let openImagePickerAsync = async () => {

  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  if (permissionResult.granted == false){
    alert("Permission is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  
if (pickerResult.cancelled == true){
  return;
}

setSelectedImage({localUri: pickerResult.uri});

};

let openSharingDialogAsync = async () =>{
  if (!(await Sharing.isAvailableAsync)){
    alert('Sharing is not available on my phone');
    return;
  }

  Sharing.shareAsync(selectedImage.localUri);
};




if (selectedImage !== null){
  return(
<View style={styles.container}>
  <Image source={{ uri: selectedImage.localUri}} style={styles.selImage}/>
    <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
      <Text style={styles.buttonText}>Share my photo</Text>

    </TouchableOpacity>
</View>
  )
}

  return (
    <View style={styles.container}>
     <Image source={{uri: ''}}
     style={styles.logo}></Image> 
     <Text style={styles.insts}>Press the button below to select an image on your phone</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => alert(openImagePickerAsync)}
      >
      
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: 'center',
    backgroundColor: "#008B8B",
    borderRadius: 5
  },

insts: {
fontSize:  18,
color: "#888",
marginHorizontal: 15,
marginBottom: 10
},

logo: {
  width: 310, 
  height: 300,
  marginBottom: 20
},

buttonText:{
  fontSize: 20,
  color: "#fff"
},

selImage:{
  width: 300,
  height: 300,
  resizeMode: 'contain'
}

});
