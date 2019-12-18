import React, { Component } from 'react'
import { reduxForm } from 'redux-form/immutable'
// import { ActionsContainer, Button, FieldsContainer, Fieldset, Form} from 'react-native-clean-form'
import { Input, Switch } from 'react-native-clean-form/redux-form-immutable'
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native'
import InputField from './InputField'
import NextButton from './NextButton'



class RegisterScreen extends Component {
  
  state = {
    username: '',
    password: '',
    password_confirmation: ''
  }

  usernameChange = () => {
    let input = event.target.value
    console.log(input)
    this.setState({
      username: input
    })
  }
  passwordChange = () => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }
  confirmationChange = () => {
    console.log(event.target.value)
    this.setState({
      password_confirmation: event.target.value
    })
  }

  
  handleSubmit = () => {
    
    let usernameInput = this.state.username
    let passwordInput = this.state.password
    fetch('http://localhost:3001/api/v1/users', {
      method: 'POST',
      
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameInput,
        password_digest: passwordInput
      }),
    })
    .then(resp => resp.json())
    .then(responseData => {
      console.info(responseData) 
    })
  }

  render () {
    return (
      
        <View style={styles.wrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.registerHeader}>Register</Text>
            <InputField 
            name="username" 
            labelText="USERNAME" 
            inputType="username" 
            customStyle={{marginTop:40}}
            borderBottomColor={'white'}
            // onEndEditing={this.usernameChange} 
            onChange={this.usernameChange} 
            //works in Browser
            // onChangeText={this.usernameChange} 
            //works in ios Simulator
            />
            <InputField 
            name="password" 
            labelText="PASSWORD" 
            inputType="password" 
            customStyle={{marginTop:40}}
            borderBottomColor={'white'}
            onChange={this.passwordChange} //works in Browser
            // onChangeText={this.passwordChange} 
            //works in ios Simulator
            />
            <InputField 
            name="confirm_password" 
            labelText="CONFIRM PASSWORD" 
            inputType="password"
            customStyle={{marginTop:40}} 
            borderBottomColor={'white'}
            onChange={this.confirmationChange} //works in Browser
            // onChangeText={this.confirmationChange} 
            //works in ios Simulator
            />
          </ScrollView>
          <TouchableOpacity style={styles.buttonBorder}>
            <Button 
            style={styles.submitButton} 
            title="Submit"
            onPress={this.handleSubmit} />
          </TouchableOpacity>
        </View>
        
        
      
    )
  }

}

export default RegisterScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1f1f2c',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 100

  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    paddingBottom: 10
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    flex:1
   },
  registerHeader: {
    fontSize: 28,
    color: 'white',
    fontWeight: "300",
    marginBottom: 50,
    top: 60
  },
  submitButton: {
    bottom: 30,
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


// reduxForm({
//   form: 'RegisterForm',
//   validate: values => {
//     const errors = {}

//     values = values.toJS()

//     if (!values.username) {
//       errors.username = 'Username is required.'
//     }

//     if (!values.password) {
//       errors.password = 'email password is required.'
//     }

//     if (!values.email) {
//       errors.email = 'Email is required.'
//     }

//     return errors
//   }
// })(RegisterScreen)