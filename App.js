import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import DiscoverContainer from './src/containers/DiscoverContainer'


function App() {
  return (
    <View style={styles.container}>
      <DiscoverContainer/>
    </View>
  );
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1f1f2c',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
