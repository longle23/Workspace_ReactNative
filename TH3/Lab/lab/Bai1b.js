import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Bai1b(props) {
  return (
    <ImageBackground source={require('./img/background.png')} style={{ flex: 100 }}>
      <View style={{ flex: 25, justifyContent: 'center' }}>
        <Image source={require('./img/lock.png')} style={{ alignSelf: 'center', width: '30%', height: '50%' }}></Image>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'black',
            alignSelf: 'center',
          }}>
          FORGET
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'black',
            alignSelf: 'center',
          }}>
          PASSWORD
        </Text>
      </View>

      <View style={{ flex: 15, justifyContent: 'center' }}>
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Provide your accounts email for which you want to reset your password
        </Text>

        <View
          style={{
            flexDirection: 'row',
            height: 45,
            width: 350,
            marginTop: 10,
            alignSelf: 'center',
            backgroundColor: '#C4C4C4',
          }}>

          <Image source={require('./img/mail.png')} />

          <TextInput placeholder="Email" />
        </View>
      </View>

      <View style={{ flex: 15, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 340,
            margin: 10,
            backgroundColor: '#E3C000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
export default Bai1b;