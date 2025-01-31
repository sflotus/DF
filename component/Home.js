import React from 'react';
import {View, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';

export default function Home({navigation}) {
    return (
        <ImageBackground source={require('../assets/RN-Test/home-background.png')} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../assets/RN-Test/logo.png')} style={styles.image}/>
                <TouchableOpacity onPress={() => navigation.navigate('GamePlay')}>
                    <Image source={require('../assets/RN-Test/tap-to-play.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    image: {
        marginBottom: 20,
        zIndex:2,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },


});