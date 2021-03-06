import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class InputField extends Component {
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
    } = this.props;
    const color = labelColor || 'white';
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || 'white';
    const borderBottom = borderBottomColor || "transparent";
    return (
        <View style={[customStyle, styles.wrapper]}>
          <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
          <TextInput
            onBlur={this.props.onBlur}
            onFocus={this.props.onFocus}
            onChangeText={this.props.onChangeText}
            onChange={this.props.onChange}
            onEndEditing={this.props.onEndEditing}
            autoCorrect={false}
            style={[
              { color: inputColor, borderBottomColor: borderBottom },
              styles.inputFiled
            ]}
            secureTextEntry={inputType === "password"}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
      borderBottomWidth: 1,
      paddingTop: 5,
      paddingBottom: 5
    }
  });
  export default InputField;