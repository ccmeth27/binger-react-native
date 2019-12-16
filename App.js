import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import DiscoverContainer from './src/containers/DiscoverContainer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';

function App() {

  const rootReducer = combineReducers({...reducers});
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <DiscoverContainer/>
      </View>
    </Provider>
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
