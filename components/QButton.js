import React from 'react';
import { StyleSheet, Text, View,Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';



import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import SettingsScreen from './SettingsScreen';

import { withNavigation } from 'react-navigation';


export default class QButton extends React.Component{


  state = {
    x: new Animated.Value(0.5),
    fadeAnim: new Animated.Value(0),
 }

  componentDidMount(){
   Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1200,              // Make it take a while
      }
    ).start();
 }


 animateCorrect(){
   Animated.timing(this.state.x,
   {
      toValue: 1,
      duration: 200,
   }).start(()=>{
     this.resetStatus();
   });
 }

  animateWrong(){
    Animated.timing(this.state.x,
    {
       toValue: 0,
       duration: 200,
    }).start(()=>{
      this.resetStatus();
    });
  }

  resetStatus(){
    Animated.timing(this.state.x,
    {
       toValue: 0.5,
       duration: 150,
    }).start(()=>{
      this.props.call();
      isPressed=false;
    });

  }

  render(){

    const BackgroundColorConfig = this.state.x.interpolate(
          {
            inputRange: [ 0, 0.5, 1 ],
            outputRange: [ '#f9320c', '#F0E5DE', '#3ac569']
          });




       let checkCorrect = () => {
          if (!isPressed) {
           isPressed=true;
            if (this.props.correct == this.props.title) {
              this.animateCorrect();
              this.props.score(1);
            } else {
              this.animateWrong();
              this.props.score(-1);
            }

          }
        }

       let fadeAnim = this.state.fadeAnim;
    return(
      <Animated.View style={[styles.mbutton, {backgroundColor: BackgroundColorConfig, marginTop: 15, opacity: fadeAnim}]}>
                <Button
                title={this.props.title}
                color='#000'
                fontSize= {16}
                onPress={checkCorrect}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  height: 60,

                }}
                />
      </Animated.View>
    );
  }
}


var isPressed = false;



const styles = StyleSheet.create({

  mbutton:{
    width: 250,
    height: 60,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 6,
  },
});
