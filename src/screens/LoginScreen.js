import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from "react-native";
import InputField from './InputField'
import DiscoverScreen from './DiscoverScreen'


export default class LoginScreen extends Component {

  state = {
    username: '',
    password: ''
  }



  handleSubmit = (e) => {
    e.preventDefault()
    let usernameInput = this.state.username
    let passwordInput = this.state.password
    fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.props.navigation.navigate('Home')
      this.props.navigation.state.params.setUser(data.user)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    // console.log(this.props)
    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
              labelText="USERNAME" 
              labelTextSize={14} 
              labelColor={"white"} 
              textColor={"white"} 
              borderBottomColor={"white"} 
              inputType="username" 
              customStyle={{marginTop:40}} 
              onChangeText={(text) => {this.setState({username: text})}}  
            />
            <InputField 
              labelText="PASSWORD" 
              labelTextSize={14} 
              labelColor={'white'} 
              textColor={'white'} 
              borderBottomColor={'white'} 
              inputType="password"  
              customStyle={{marginTop:40}}
              onChangeText={(text) => {this.setState({password: text})}}
            />
          </ScrollView>
          <TouchableOpacity style={styles.buttonBorder}>
            <Button 
            style={styles.submitButton} 
            title="Login"
            onPress={this.handleSubmit} />
          </TouchableOpacity>
          
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
    wrapper: {
      flex: 3,
      backgroundColor: '#1f1f2c',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 100

    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1
    },
    avoidView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 30,
      flex:1
     },
    loginHeader: {
      fontSize: 28,
      color: 'white',
      fontWeight: "300",
      marginBottom: 50,
      top: 60
    },
    submitButton: {
      bottom: 0,
      // padding: 20
    },
    buttonBorder: {
      padding: 20,
      bottom: 60,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: 'white',
      backgroundColor: 'grey',
      width: 150,
      alignSelf: 'center',
      justifyContent: 'center'
      
    }
  });