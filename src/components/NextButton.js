import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

function NextButton (props) {
    
   
      return (
        <View style={styles.buttonWrapper}>
          <TouchableHighlight 
            style={[{ opacity: 0.6 }, styles.button]}
            >
            <Icon
                
                name="angle-right"
                color={'white'}
                size={32}
                style={styles.icon}
            />
          </TouchableHighlight>
        </View>
      );
    
}
export default NextButton

NextButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
  };

  const styles = StyleSheet.create({
    buttonWrapper: {
      alignItems: "flex-end",
      right: 15,
      bottom: 50,
      paddingTop: 0
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      width: 60,
      height: 60,
      backgroundColor: 'black'
    },
    icon: {
      marginRight: -2,
      marginTop: -2
    }
  });