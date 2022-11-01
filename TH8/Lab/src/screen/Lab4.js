import React, { useRef, useEffect } from "react";
import { Animated, View, StyleSheet, Button, Image, Text } from "react-native";
import meme from '../../assets/meme.png'

const Lab4 = () => {

    const fadeAni = useRef(new Animated.Value(0)).current;
    const translateXAni = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fadeIn = () => {
            Animated.timing(fadeAni, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true,
            }).start();
        };

        const leftToRight = () => {
            Animated.timing(translateXAni, {
                toValue: 300,
                duration: 3000,
                useNativeDriver: true,
            }).start();
        };

        fadeIn();

        leftToRight();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.containerImage,
                    { transform: [{ translateX: translateXAni }] },
                ]}
            >
                <Image style={styles.image} source={meme} />
            </Animated.View>

            <Animated.View style={{ opacity: fadeAni }}>
                <Text style={{ fontSize: 50,marginTop:50 }}>Hello Long</Text>
            </Animated.View>
        </View >
    );
}

export default Lab4;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#fff",
        alignItems: "center",
    },
    containerImage: {
        position: "absolute",
        left: 0,
        marginTop:200
    },
    image: {
        width: 100,
        height: 200,
    },
});