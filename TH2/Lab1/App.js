import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Lab1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const actionClick = () => {
    setResult(inputValue);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50 }}>Lab 1</Text>

      <TextInput
        value={inputValue}
        onChangeText={(newText) => setInputValue(newText)}
        style={styles.input}></TextInput>

      <Button onPress={actionClick} title="CLICK HERE" />

      <View>
        <Text>Ket qua nhap vao: {result}</Text>
      </View>

    </View>
  );
};

export default Lab1;

const styles = StyleSheet.create({
  input: {
    height: 50
  },
});
