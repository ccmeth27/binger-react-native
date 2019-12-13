'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class NoMoreCards extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
      return (
        <View style={styles.noMoreCards}>
          <Text>No more cards</Text>
        </View>
      )
    }
  }