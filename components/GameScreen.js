import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import {Button} from 'react-native-elements';


import QButton from './QButton.js';
import Question from './Question.js';

export default class GameScreen extends React.Component{

  state={
    position: new Animated.Value(350)
  }

  componentDidMount(){
    Animated.sequence([
      Animated.timing(
        this.state.position,
        {
          toValue: -40,
          duration: 1200,
        }
      ),
      Animated.timing(this.state.position,
      {
        toValue: 0,
        duration: 450,
      })
    ]).start();
  }


  render() {
    return (
      <View style={styles.container}>
      <Question navi={"GameOver"}></Question>

      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
