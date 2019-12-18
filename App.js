import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
// import thunk from 'redux-thunk';
// import { Provider, connect } from 'react-redux';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import allReducers from './src/reducers/index'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import DiscoverScreen from './src/screens/DiscoverScreen'
import { createAppContainer } from 'react-navigation'


import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome } from "react-native-vector-icons";

// import { SignedOutContainer, SignedInContainer, createRootNavigator } from './router'



class App extends Component {
  

  state = { user: null}

  setUser = user => {
    this.setState({ user: user})
  }
  // componentDidMount() {
  //   isSignedIn()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     // .catch(err => alert("An error occurred"));
    
  // }
  
    render() {
    
        return (
          //current issue is that the 'store' cant be passed through react-navigation
          // <Provider >
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer}>  
                <Button style={styles.authButtons}
                title="Register"
                onPress={() => this.props.navigation.navigate('RegisterScreen')}
                /> 
              </TouchableOpacity>
              <View>
                <Text style={styles.textSpacer}>or</Text>
              </View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Button style={styles.authButtons}
                title="Log In"
                onPress={() => this.props.navigation.navigate('LoginScreen')}
                /> 
              </TouchableOpacity>
            </View> 
          // </Provider>
          );
    }
  
}
// const rootReducer = combineReducers({...allReducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(allReducers);


const AppNavigator = createStackNavigator({
  Home: App,
  RegisterScreen: RegisterScreen,
  LoginScreen: LoginScreen
  
})
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer



//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1f1f2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: '#1f1f2c'
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
   },
  loginHeader: {
    fontSize: 28,
    color: 'white',
    fontWeight: "300",
    marginBottom: 40,
    marginLeft: 20
  },
  authButtons: {
    fontWeight: 'bold',
    borderColor: 'white'
  },
  buttonContainer:{
    height: 50,
    width: 150,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSpacer: {
    paddingTop: 10,
    paddingBottom: 10
  }
});



