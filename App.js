import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';
import DiscoverScreen from './src/containers/DiscoverScreen'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './src/reducers'
import LoginScreen from './src/components/LoginScreen'
import RegisterScreen from './src/components/RegisterScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class App extends Component {

  
  
  
  render() {
      return (
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
    );
  }
}

//export default App
//react navigation
const AppNavigator = createStackNavigator({
  Home: App,
  RegisterScreen: RegisterScreen,
  LoginScreen: LoginScreen,
  DiscoverScreen: DiscoverScreen
})
const AppContainer = createAppContainer(AppNavigator)
export default AppContainer


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

const rootReducer = combineReducers({...reducers});
const store = createStore(rootReducer, applyMiddleware(thunk));


// signUp(){
//   Auth.signUp({
//     username: 'ccmeth',
//     password: 'password123',
//     attributes: {
//       email: 'connormeth27@gmail.com',
//       phone_number: '9086981404'
//     }
//   })
//   .then(res => {
//     console.log('successful signup: ', res)
//   })
//   .catch(err => {
//     console.log('error: ', err)
//   })
// }

// confirmUser() {
//   const { authCode } = this.state
//   Auth.confirmSignUp('ccmeth', authCode)
//   .then(res => {
//     console.log('successful confirmation: ', res)
//   })
//   .catch(err => {
//     console.log('error confirming user: ', err)
//   })
// }
// onChangeText(authCode) {
//   this.setState({ authCode })
// }

// signIn() { // 1
//   Auth.signIn(username, password)
//     .then(user => {
//     // save user in state somewhere
//     })
//     .catch(err => {
//       console.log('error signing in: ', err)
//     })
// }

// confirmSignIn() { // 2
//   Auth.confirmSignIn(user, authCode)
//     .then(user => {
//       console.log('user: ', user)
//     }).catch(err => {
//       console.log('error confirming sign in: ', err)
//     })
// }