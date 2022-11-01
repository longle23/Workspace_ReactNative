import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

const Lab1 = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000
        }).start();
        
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        // Bind opacity to animated value
                        opacity: fadeAnim
                    }
                ]}
            >
                <Text style={styles.fadingText}>Welcome to Animation React Native</Text>
            </Animated.View>

            <Text>Hello my name is Le Hoang Long</Text>
        </SafeAreaView>
    );
}

export default Lab1;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 300
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28
    },
});