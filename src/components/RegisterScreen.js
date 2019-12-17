import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import InputField from './InputField'
import NextButton from './NextButton'

export default class RegisterScreen extends Component {
    render() {
      return (
        <View style={styles.wrapper}>
          <ScrollView style={styles.scrollView}>
              <Text style={styles.registerHeader}>Sign Up</Text>
              <InputField 
                labelText="EMAIL ADDRESS" 
                labelTextSize={14} 
                labelColor={"white"} 
                textColor={"white"} 
                borderBottomColor={"white"} 
                inputType="email" 
                customStyle={{marginTop:40}} 
                  
              />
              <InputField 
                labelText="USERNAME" 
                labelTextSize={14} 
                labelColor={'white'} 
                textColor={'white'} 
                borderBottomColor={'white'} 
                inputType="password"  
                customStyle={{marginTop:40}}
  
              />
              <InputField 
                labelText="PASSWORD" 
                labelTextSize={14} 
                labelColor={'white'} 
                textColor={'white'} 
                borderBottomColor={'white'} 
                inputType="password"  
                customStyle={{marginTop:40}}
  
              />
              <InputField
                labelText="CONFIRM PASSWORD"
                labelTextSize={14} 
                labelColor={'white'} 
                textColor={'white'} 
                borderBottomColor={'white'} 
                inputType="password"  
                customStyle={{marginTop:40}}
  
              />
            </ScrollView>
            <NextButton onPress={() => this.props.navigation.navigate('DiscoverScreen')}/>
        </View>
      );
    }
  }
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
        flex: 1
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
      }
    });