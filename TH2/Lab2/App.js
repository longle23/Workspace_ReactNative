import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const actionClick = () => {
  alert('Login success');
}

const Lab2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 50, fontStyle: "italic" }}>Login Screen</Text>

      <View style={styles.body}>
        <TextInput
          style={styles.input1}
          placeholder="Username" />

        <TextInput
          style={styles.input2}
          placeholder="Password"
          secureTextEntry={true} />

        <TouchableOpacity onPress={actionClick} style={styles.buttonLogin}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Lab2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4279B4",
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
  },
  body: {
    alignItems: "center",
    marginTop: 200
  },
  input1: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 30,
    width: 300,
    paddingHorizontal: 100,
    fontSize: 20,
    textAlign: "center",
  },
  input2: {
    marginTop: 10,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 30,
    width: 300,
    paddingHorizontal: 100,
    fontSize: 20,
    textAlign: "center",
  },
  buttonLogin: {
    marginTop: 50,
    backgroundColor: "#F5E900",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
