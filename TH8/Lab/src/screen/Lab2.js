import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button, Image } from "react-native";
import meme from '../../assets/meme.png'

const Lab2 = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const translateXAni = useRef(new Animated.Value(0)).current;
  const translateYAni = useRef(new Animated.Value(0)).current;

  const leftToRight = () => {
    Animated.timing(translateXAni, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const rightToLeft = () => {
    Animated.timing(translateXAni, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  const topToBottom = () => {
    Animated.timing(translateYAni, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  const bottomToTop = () => {
    Animated.timing(translateYAni, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={{ height: "100%", justifyContent: "space-between" }}>
      <Animated.View style={[
        {
          transform: [{ translateX: translateXAni }, { translateY: translateYAni }]
        }
      ]}
      >
        <Image source={meme} style={{ width: 100, height: 200 }} />
      </Animated.View>

      <View style={{ width: '80%', alignSelf: 'center', marginBottom: 20 }} >
        <Button title="Left to right" onPress={() => leftToRight()} />

        <Button title="Right to left" onPress={() => rightToLeft()} />

        <Button title="Top to bottom" onPress={() => topToBottom()} />

        <Button title="Bottom to top" onPress={() => bottomToTop()} />
      </View>

    </View >
  );
}

export default Lab2;

const styles = StyleSheet.create({

});