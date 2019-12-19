import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
// import thunk from 'redux-thunk';
// import { Provider, connect } from 'react-redux';
// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import allReducers from './src/reducers/index'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DiscoverScreen from './src/screens/DiscoverScreen'
import { FontAwesome } from "react-native-vector-icons";
import HomeContainer from './src/containers/HomeContainer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeNavigator from './src/containers/HomeNavigator'

// import { SignedOutContainer, SignedInContainer, createRootNavigator } from './router'



class App extends Component {
  

  state = { 
    currentUser: null,
    loggedIn: false
  }

  setUser = (user) => {
    this.setState({ 
      currentUser: user,
      loggedIn: true
    })
  }
  
  
    render() {
      console.log(this.state.currentUser)
      if(this.state.currentUser === null && this.state.logged_in ===true)
        return (
            <View style={styles.container}>
              
              <TouchableOpacity style={styles.buttonContainer}>  
                <Button style={styles.authButtons}
                title="Register"
                onPress={() => this.props.navigation.navigate('Register',{setUser: this.setUser})}
                /> 
              </TouchableOpacity>
              <View>
                <Text style={styles.textSpacer}>or</Text>
              </View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Button style={styles.authButtons}
                title="Log In"
                onPress={() => this.props.navigation.navigate('Login',{setUser: this.setUser})}
                /> 
              </TouchableOpacity>
            </View> 
          
        );
        else {
          return (
            <View style={styles.container}>
              <HomeContainer currentUser={this.state.currentUser}/>
            </View>
          )}
    }
  
}

const AuthStack = createStackNavigator({
  Home: App,
  Register: RegisterScreen,
  Login: LoginScreen,
});
const AuthNavigator = createAppContainer(AuthStack)
export default AuthNavigator
    
    
  
    

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



