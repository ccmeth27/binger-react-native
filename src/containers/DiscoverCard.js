import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Card, Animated, PanResponder } from 'react-native';



function DiscoverCard (props) {
  

   
        return(

                // <Animated.View 
                // key={movie.id} style={styles.poster} >
                <Swiper
                    style={styles.wrapper}
                    paginationStyle={{ container: { backgroundColor: 'transparent' } }}
                    paginationLeft={''}
                    paginationRight={''}
                    smoothTransition
                    stack
                    dragDownToBack
                    dragY
                >
                        <Image source={{uri: props.movie.poster_120x171}}
                            style={styles.card}/>
                </Swiper>


                // </Animated.View>

            )
    
    
    
}
export default DiscoverCard

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    poster: {
        height: SCREEN_HEIGHT - 260,
        width: SCREEN_WIDTH - 20,
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        position: 'absolute'
    },
    card: {
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        resizeMode: "cover",
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    wrapper: {
        backgroundColor: '#009688',
        flex: 1,
      }
    
    
})
// {...this.state.PanResponder.panHandlers}
// style={[
//     { transform: this.position.getTranslateTransform() },
//     { height: SCREEN_HEIGHT - 260,
//     width: SCREEN_WIDTH - 20,
//     marginTop: 20,
//     padding: 10,
//     alignSelf: 'center',
//     position: 'absolute'}]}

// componentDidMount(){
//     this.position = new Animated.ValueXY()
// }

// getDerivedStateFromProps(){
//     this.PanResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (event, gestureState) => true,
//         onPanResponderMove: (event, gestureState) => {
//            this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
//       },
//         onPanResponderRelease: (event, gestureState) => {
//         }
//       })
//   }