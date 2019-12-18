import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from "react-native";
import InputField from './InputField'
import NextButton from './NextButton'
import DiscoverScreen from './DiscoverScreen'


export default class LoginScreen extends Component {

  state = {
    username: '',
    password: ''
  }

  usernameChange = () => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }
  passwordChange = () => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password_digest: this.state.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
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
              onChange={this.usernameChange}  
            />
            <InputField 
              labelText="PASSWORD" 
              labelTextSize={14} 
              labelColor={'white'} 
              textColor={'white'} 
              borderBottomColor={'white'} 
              inputType="password"  
              customStyle={{marginTop:40}}
              onChange={this.passwordChange}
            />
          </ScrollView>
          <TouchableOpacity style={styles.buttonBorder}>
            <Button 
            style={styles.submitButton} 
            title="Submit"
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
      bottom: 10,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'grey',
      width: 150,
      alignSelf: 'center',
      justifyContent: 'center'
      
    }
  });