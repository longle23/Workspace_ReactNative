import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Bai1c(props) {
  return (
    <ImageBackground source={require('./img/background.png')} style={{ flex: 100 }}>
      <View style={{ flex: 15, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 50,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          CODE
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          VERIFICATION
        </Text>
      </View>

      <View style={{ flex: 15, justifyContent: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Enter ontime password sent on ++849092605798
        </Text>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            marginVertical: 5,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />

          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderColor: 'black',
              borderWidth: 1,
            }} />
        </View>
      </View>

      <View style={{ flex: 15, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 350,
            justifyContent: 'center',
            backgroundColor: '#E3C000',
          }}>

          <Text
            style={{
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default Bai1c;
