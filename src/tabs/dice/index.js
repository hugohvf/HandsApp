import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Dice from '../../components/dice.js';
import Constants from 'expo-constants';

const DiceRoller = ({ navigation }) => {

    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
                <Image style={styles.backIcon} source={require('../../resources/icon/back.png')}/>
            </TouchableOpacity>
            <View style={{height: '80%', width:'100%'}}>
                <Dice />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d9a703",
        marginTop: Constants.statusBarHeight,
    },

    backContainer: {
        width: 50,
        height: 50,
    },

    backIcon: {
        width: 20,
        height: 20,
        margin: 15,
    },
});
export default DiceRoller;