import React from 'react';
import { StyleSheet, Text, View,Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';




import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import SettingsScreen from './SettingsScreen';

import { withNavigation } from 'react-navigation';


class AButton extends React.Component{


  state = {
   position: new Animated.Value (-350),
 }


 componentDidMount(){
      Animated.sequence([
        Animated.timing(
          this.state.position,
          {
            toValue: 30,
            duration: 800,
            delay: this.props.del
          }
        ),
        Animated.timing(this.state.position,
        {
          toValue: 0,
          duration: 450,
        })
      ]).start();
 }


  render(){
    return(
      <Animated.View style={{transform: [{translateX: this.state.position}]}}>
                <Button
                title={this.props.title}
                titleStyle={{ fontWeight: "700" }}
                onPress={() => this.props.navigation.navigate(this.props.navi) }
                buttonStyle={styles.mbutton}
                />
              </Animated.View>
    );
  }
}

export default withNavigation(AButton);

const styles = StyleSheet.create({

  mbutton:{
    backgroundColor: '#84B1ED',
    width: 250,
    height: 50,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 6,
    marginTop: 15,
  },
});
