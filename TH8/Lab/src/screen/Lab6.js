import React from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import bell from '../../assets/bell.png'

export default class Cau6 extends React.Component {

    constructor(p) {
        super(p);
        this.state = {
            amin: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.amin, {
                    toValue: -1,
                    duration: 100,
                    delay: 800,
                    useNativeDriver: false
                }),

                Animated.timing(this.state.amin, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: false
                }),

                Animated.timing(this.state.amin, {
                    toValue: -1,
                    duration: 100,
                    useNativeDriver: false
                }),

                Animated.timing(this.state.amin, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: false
                }),

                Animated.timing(this.state.amin, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false
                }),
            ]),
        ).start();
    }

    render = () => {

        const rotation = this.state.amin.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-10deg', '10deg'],
        });

        return (
            <View style={style.container}>
                <Animated.View style={{ alignSelf: 'center', transform: [{ rotate: rotation }] }}>
                    <Image source={bell} style={{ width: 200, height: 200 }} />
                </Animated.View>
            </View>
        );
    };
}

const style = StyleSheet.create({
    container: {
        height: '100%'
    },
});