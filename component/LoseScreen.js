import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";

function LoseScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/RN-Test/background.png')} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../assets/RN-Test/you-lose.png')} style={styles.image}/>
                <TouchableOpacity onPress={() => navigation.navigate('GamePlay')}>
                    <Image source={require('../assets/RN-Test/tap-to-restart.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
export default LoseScreen;
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