import React from 'react';
import { StyleSheet, Text, View,Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';

export default class AMTitle extends React.Component{

  state = {
   fadeAnim: new Animated.Value(0),
 }


 componentDidMount(){
   Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 6000,              // Make it take a while
      }
    ).start();
 }


  render(){
    let { fadeAnim } = this.state;
    return(
      <Animated.View style={{opacity: fadeAnim}}>
         <Text style={styles.htitle}>{this.props.text}</Text>
       </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  htitle:{
      marginTop: 50,
      fontSize: 28,
      fontWeight: '800',
      color: '#F68657',
      marginBottom: 70,
  },
});
