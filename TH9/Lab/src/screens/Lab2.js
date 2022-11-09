import React, { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import meme from "../../assets/meme.png";

function Lab2() {
  // random number
  const randomLeft = Math.floor(Math.random() * 250) + 1;
  const randomTop = Math.floor(Math.random() * 250) + 1;

  const randomLeft1 = Math.floor(Math.random() * 250) + 1;
  const randomTop1 = Math.floor(Math.random() * 250) + 1;

  const randomLeft2 = Math.floor(Math.random() * 250) + 1;
  const randomTop2 = Math.floor(Math.random() * 250) + 1;

  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(randomLeft),
    marginTop: new Animated.Value(randomTop),
  });

  const [location1, setLocation1] = useState({
    x1: null,
    y1: null,
    marginLeft1: new Animated.Value(randomLeft1),
    marginTop1: new Animated.Value(randomTop1),
  });

  const [location2, setLocation2] = useState({
    x2: null,
    y2: null,
    marginLeft2: new Animated.Value(randomLeft2),
    marginTop2: new Animated.Value(randomTop2),
  });

  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;

  const onTouch = (evt) => {
    const x = Math.floor(Math.random() * 250) + 1;
    const y = Math.floor(Math.random() * 250) + 1;

    const x1 = Math.floor(Math.random() * 250) + 1;
    const y1 = Math.floor(Math.random() * 250) + 1;

    const x2 = Math.floor(Math.random() * 250) + 1;
    const y2 = Math.floor(Math.random() * 250) + 1;

    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });

    setLocation1({
      x1: x1,
      y1: y1,
      marginLeft1: x1,
      marginTop1: y1,
    });

    setLocation2({
      x2: x2,
      y2: y2,
      marginLeft2: x2,
      marginTop2: y2,
    });
  };

  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      style={styles.container}
    >
      <Animated.Image
        source={meme}
        style={[{ marginLeft: marginLeft, marginTop: marginTop }, { width: 30, height: 60 }]}
        onTouchStart={onTouch}
      ></Animated.Image>

      <Animated.Image
        source={meme}
        style={[{ marginLeft: marginLeft1, marginTop: marginTop1 }, { width: 30, height: 60 }]}
        onTouchStart={onTouch}
      ></Animated.Image>

      <Animated.Image
        source={meme}
        style={[{ marginLeft: marginLeft2, marginTop: marginTop2 }, { width: 30, height: 60 }]}
        onTouchStart={onTouch}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Lab2;