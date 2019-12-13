import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import SwipeCards from 'react-native-swipe-cards'
import DiscoverCard from './src/containers/DiscoverCard'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

function App() {
  return (
    <View style={styles.container}>
      
      <DiscoverCard/>
    </View>
  );
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
