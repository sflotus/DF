import React, { useState, useRef, useEffect } from 'react';
import {View, Image, StyleSheet, ImageBackground, TouchableOpacity, Animated, Alert} from 'react-native';


export default function GamePlay({ navigation }) {
    const [ballPosition, setBallPosition] = useState(0);
    const [guess, setGuess] = useState(0);
    const [result, setResult] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [cupPosition, setCupPosition] = useState([
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current,
        useRef(new Animated.Value(0)).current
    ]);

    const handleCupPress = async (index) => {
        cupPosition.forEach((position, i) => {
            if (i !== index) {
                Animated.timing(position, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            }
        });
        Animated.timing(cupPosition[index], {
            toValue: -50,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setGuess(index);
        setTimeout(() => {
            if (index === ballPosition) {
               Alert.alert('Congratulations!',' You win!',
                   [{text: 'OK', onPress: () => setIsReset(!isReset)}]);
            }
        }, 500);

    };
    useEffect(() => {
        setBallPosition(Math.floor(Math.random() * 3));
    }, [isReset]);

    return (
            <ImageBackground source={require('../assets/RN-Test/background.png')} style={styles.background}>
                <View style={styles.cupsGroup}>
                    {[0, 1, 2].map((index) => (
                        <TouchableOpacity key={index} onPress={() => handleCupPress(index)}>
                            {ballPosition === index && (
                                <Image
                                    source={require('../assets/RN-Test/ball.png')}
                                    style={styles.ball}
                                />
                            )}
                            {/* Animate the cup movement */}
                            <Animated.View style={{ transform: [{ translateY: cupPosition[index] }] }}>
                                <Image source={require('../assets/RN-Test/plastic-cup.png')} />
                            </Animated.View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cupsGroup: {
        flexDirection: 'row',
        marginTop: 100,
        zIndex: 1,
    },
    ball:{
        position: 'relative'
    },

});
