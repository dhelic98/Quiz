import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import {Button} from 'react-native-elements';


import QButton from './QButton.js';
import Question from './Question.js';
import AButton from './AButton.js';

import HomeScreen from './HomeScreen.js';

import { withNavigation } from 'react-navigation';


class GameOver extends React.Component{

  render() {
    const { navigation } = this.props;
    const score = navigation.getParam('score', 'No score');

    return (
      <View style={styles.container}>
        <Text>Game over</Text>
        <Text>Score: {JSON.stringify(score)}</Text>
          <AButton del={0} title={'Go home'} navi={"Home"}></AButton>
      </View>
    );
  }
}

export default withNavigation(GameOver);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
