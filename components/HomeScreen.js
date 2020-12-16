import React from 'react';
import { StyleSheet, Text, View,Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';



import GameScreen from './GameScreen.js';
import SettingsScreen from './SettingsScreen.js';
import AButton from './AButton.js';
import AMTitle from './AMTitle.js';

export default class HomeScreen extends React.Component {


  state ={
    position : new Animated.ValueXY({x:-300, y:-150})
  }

  animateDots(){

  }


  render(){
    return(
      <View style={styles.container}>
        <AMTitle text={'Welcome to the APP'}></AMTitle>
        <AButton del={1500} title={'New Game'} navi={"Game"}></AButton>
        <AButton del={2200} title={'Settings'} navi={"Settings"}></AButton>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50/2,
    backgroundColor: '#6E7783'
}
});
