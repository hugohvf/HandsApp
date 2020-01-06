import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React , { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Main from './pages/main';
import GameInfo from './pages/gameInfo';
import Filter from './pages/filter';
import TapView from './tabs/tapView/tapView';
import ScoreSheet from './tabs/score/score';
import Dice from './tabs/dice/dice.js';


const RootStack = createStackNavigator({
    Main,
    GameInfo,
    Filter,
}, 
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#4b3521"
        },
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    Jogos: {
      screen: RootStack,
    },
    "Finger Chooser": {
      screen: TapView,
    },
    "Tabela de pontos": {
      screen: ScoreSheet,
    },
    Dados: {
      screen: Dice,
    },
  }, {
    drawerBackgroundColor: "#4b3521",
    drawerType: 'front',
    drawerWidth: '40%',
    contentOptions: {
      inactiveTintColor: "#fff",
      activeTintColor: '#d9a703',
      activeBackgroundColor: "#3e2915",
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      },
      deefaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#4b3521"
        },
      },
    },
  });
  


const AppContainer = createAppContainer(MyDrawerNavigator);
export default AppContainer;