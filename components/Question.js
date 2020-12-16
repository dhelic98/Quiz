import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';

import { withNavigation } from 'react-navigation';

import GameOver from './GameOver.js';


import QButton from './QButton.js';

let RNFS = require('react-native-fs');
let SQLite = require('react-native-sqlite-storage');

var sourcePath = RNFS.MainBundlePath + '/' + 'quiz.db';
var destinPath = RNFS.LibraryDirectoryPath + '/LocalDatabase/' + 'quiz.db';


var questions =[];

var q = null;

class Question extends React.Component{

    state={
      position: new Animated.Value(350),
      q: "Waiting",
      time: "11",
      record: null,
    }

      async getData() {
        let db = SQLite.openDatabase({
          name: 'main.db',
          createFromLocation: "~quiz.db",
          location: 'Library'
        }, this.openCB, this.errorCB);
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM main.questions', [], (tx, results) => {
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              questions.push(row);
            }

            this.setState({
              q:questions[0]
            });
          });
        });
      }



errorCB(err) {
  console.log("SQL Error: " + err);
}

successCB() {
  console.log("SQL executed fine");
}

openCB() {
  console.log("Database OPENED");
}


  animateQ(){
    Animated.sequence([
      Animated.timing(
        this.state.position,
        {
          toValue: -40,
          duration: 1000,
        }
      ),
      Animated.timing(this.state.position,
      {
        toValue: 0,
        duration: 450,
      })
    ]).start();
  }

  componentDidMount(){

      this.getData();
      this.animateQ();
      this.timer();

  }

  componentWillUnmount(){

  }

  timer(){
    let sec = this.state.time;
    sec--;
    if(sec<=0){
      this.upScore(-1);
      this.nextQuestion();

    }
    else{
      if(sec<10){
        sec = "0" + sec;
      }
      this.setState({time:sec});
    }
    setTimeout(()=> this.timer(), 1000);
  }

  nextQuestion =()=>{
    index++;
    if(index >= 10){
      index=0;
      this.props.navigation.navigate(this.props.navi, {score: score});
      score=0;
    }
    else{
    this.setState({
      position: new Animated.Value(350),
      q:  questions[index],
      time: "10"
    });
    this.animateQ();
  }
}

  upScore= (change)=>{
    score+=change;
  }


  render(){


    return(
      <View style={styles.container}>
        <View style={{marginTop: 60, alignSelf: 'flex-start', paddingBottom: 20, paddingLeft:20}}>
                <Text style={styles.timer}>Time:{this.state.time}s</Text>
                <Text style={styles.score}>Score:{score}</Text>
        </View>
        <Animated.View style={{transform: [{translateX: this.state.position}], paddingBottom: 30, paddingHorizontal: 40}}>
            <Text style={{fontSize: 23}}>{this.state.q.QUESTION}</Text>
        </Animated.View>
        <QButton title={this.state.q.A} correct= {this.state.q.CORRECT} call={this.nextQuestion} time= {this.state.time} score = {this.upScore}></QButton>
        <QButton title={this.state.q.B} correct= {this.state.q.CORRECT} call={this.nextQuestion} time= {this.state.time} score = {this.upScore}></QButton>
        <QButton title={this.state.q.C} correct= {this.state.q.CORRECT} call={this.nextQuestion} time= {this.state.time} score = {this.upScore}></QButton>
        <QButton title={this.state.q.D} correct= {this.state.q.CORRECT} call={this.nextQuestion} time= {this.state.time} score = {this.upScore}></QButton>
      </View>
    );
  }
}

export default withNavigation(Question);




const score = 0;
const index = 0;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120
  },
  score:{
    color: '#000000',
    fontSize: 20,
    paddingRight: 30,
    alignSelf: 'flex-end',
  },
  timer:{
    color: '#000000',
    fontSize: 20,
    paddingTop: 50,
    alignContent: 'flex-start',
  }
});
