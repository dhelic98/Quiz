import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'

import HomeScreen from './components/HomeScreen.js';

import GameScreen from './components/GameScreen.js';
import SettingsScreen from './components/SettingsScreen.js';
import GameOver from './components/GameOver.js';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const RootStack = createStackNavigator({

  Home: {screen: HomeScreen},
  Game: {screen:GameScreen},
  Settings: {screen:SettingsScreen},
  GameOver:{ screen: GameOver}
},
{
 initialRouteName: 'Home',

});
