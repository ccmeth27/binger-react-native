import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


function DiscoverCard () {
   
        return(
            <View style={{ flex: 1 }}>
            <View style={{ height: 130 }} />
            <View style={{ flex: 1 }}>
              <Animated.View style={styles.poster}>
                <Image source={{uri: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'}}
                    style={styles.card}/>
              </Animated.View>
            </View >
            </View>
        ) 
    
}
export default DiscoverCard

const styles = StyleSheet.create({
    poster: {
        height: SCREEN_HEIGHT - 260,
        width: SCREEN_WIDTH - 20,
        padding: 10
        // position: 'absolute'
    },
    card: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
    
    
})