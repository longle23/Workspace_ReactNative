// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, Image
} from "react-native";

const actionClick = () => {
  alert('Register success');
}

const Lab2 = () => {
  // Set mac dinh khong hien password
  const [getPasswordVisible, setPasswordVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 50 }}>REGISTER</Text>

      <View style={styles.body}>
        <TextInput
          style={styles.input1}
          placeholder="Name" />

        <TextInput
          style={styles.input1}
          placeholder="Phone" />

        <TextInput
          style={styles.input1}
          placeholder="Email" />

        <View style={styles.containerMk}>
          <TextInput style={styles.inputMk}
            autoCapitalize='none'
            placeholder="Password"
            secureTextEntry={getPasswordVisible ? false : true} />

          <TouchableOpacity style={{ height: '100%', width: 30, position: 'absolute', right: 20 }}
            onPress={() => { setPasswordVisible(!getPasswordVisible) }}>

            {getPasswordVisible ?
              <Image source={require('./img/tatmat.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
              :
              <Image source={require('./img/momat.png')} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
            }
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input1}
          placeholder="Birthday" />

        <TouchableOpacity onPress={actionClick} style={styles.buttonLogin}>
          <Text style={{ color: 'white', fontStyle: 'bold ', fontSize: 25, fontWeight: 'bold' }}>REGISTER</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20 }}>When you agree to terms and conditions</Text>
      </View>
    </SafeAreaView>
  );
};

export default Lab2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8EFDE",
    flex: 1,
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    marginTop: 30
  },
  input1: {
    backgroundColor: "#C9E0D0",
    height: 50,
    borderRadius: 10,
    width: 380,
    fontSize: 20,
    marginTop: 15,
    paddingLeft: 10
  },
  containerMk: {
    width: 380,
    backgroundColor: "#C9E0D0",
    height: 50,
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 15,
    borderRadius: 10
  },
  inputMk: {
    height: '100%',
    width: '95%',
    fontSize: 20,
  },
  buttonLogin: {
    marginTop: 50,
    backgroundColor: "#C34E3B",
    width: 380,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
