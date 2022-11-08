import React from 'react';
import { View, Animated, Easing } from 'react-native';
import hinhtron from '../../assets/hinhtron.jpg'

export default class Cau7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rotateValueHolder: new Animated.Value(0)
        };
    }

    componentDidMount = () => {
        this.startImageRotateFunction();
    }

    startImageRotateFunction = () => {
        Animated.loop(Animated.timing(this.state.rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false,
        })).start();
    };

    render() {
        return (
            <View>
                <Animated.Image
                    style={{
                        width: 300,
                        height: 300,
                        alignSelf: "center",
                        marginTop: 300,
                        transform:
                            [
                                {
                                    rotate: this.state.rotateValueHolder.interpolate(
                                        {
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '360deg'],
                                        }
                                    )
                                }
                            ],
                    }}
                    source={hinhtron}
                />
            </View>
        );
    }

}