import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, Button, Image } from "react-native";
import meme from '../../assets/meme.png'

const Lab3 = () => {

  const fadeAni = useRef(new Animated.Value(0)).current;
  const translateYAni = useRef(new Animated.Value(0)).current;

  const topToBottom = () => {
    Animated.timing(translateYAni, {
      toValue: 300,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const stopAni = () => {
    Animated.timing(translateYAni).stop();
  };

  const resetAni = () => {
    Animated.timing(translateYAni).reset();
  };

  useEffect(() => {
    Animated.timing(fadeAni, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.containerImage,
          {
            opacity: fadeAni,
            transform: [{ translateY: translateYAni }],
          },
        ]}
      >
        <Image style={styles.image} source={meme} />
      </Animated.View>

      <View>
        <Button title="Top to bottom" onPress={() => topToBottom()} />

        <Button title="Stop" onPress={() => stopAni()} />

        <Button title="Reset" onPress={() => resetAni()} />
      </View>
    </View>
  )
}

export default Lab3;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 200,
  },
});