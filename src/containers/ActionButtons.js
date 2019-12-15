import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActionButtons = (props) => {
    
    const onPressAddWatchlist = () => {
        alert('program.title has been added to your Watchlist!')
    }
    const onPressStar = () => {
        alert('program.title marked as seen')
    }
    const onPressReject = () => {
        alert('Rejected')
    }

    
        return(
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Button style={styles.button}
                  onPress={onPressReject}
                  title="✕"
                  color="#ff0000"
                />
              </TouchableOpacity >
              <TouchableOpacity style={styles.buttonContainer}>
                <Button style={styles.button}
                  onPress={onPressStar}
                  title="★"
                  color="#ffff00"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Button style={styles.button}
                  onPress={onPressAddWatchlist}
                  title="✓"
                  color="#00ff00"
                />
              </TouchableOpacity>
          </View>
        );
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom: 50,
        left: 0,
        
    },
    button: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        borderRadius: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        // shadowColor: 'black',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowRadius: 6,
        // shadowOpacity: 0.3,
        // elevation: 2,
        // padding: 15,
    },
    buttonContainer:{
      height: 75,
      width: 75,
      borderRadius: 150,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center'
    }
});
export default ActionButtons

   