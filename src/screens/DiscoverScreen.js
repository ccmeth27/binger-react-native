import React, { Component, Fragment } from 'react'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native'


function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

class DiscoverScreen extends Component {
  
    state = {
      // cards: [...range(1, 25)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  

  renderCard = (props, i) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.movie.poster_120x171}}
              style={styles.card}
              />
     </View>
    )
  };

  onSwiped = (type) => {
    this.setState({
      cardIndex: this.state.cardIndex + 1
    })
    console.log(this.state.cardIndex)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };
  swipeRight = () => {
    this.swiper.swipeRight()
  };

  render () {
    return (
      <Animated.View >
        <Swiper
          useViewOverflow={false}
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          // onSwipedTop={() => this.onSwiped('top')}
          // onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.props.movie}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={20}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={5}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'ADDED',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            },
            top: {
              title: 'MAYBE LATER',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          // swipeBackCard
        >
        </Swiper>
      </Animated.View>
    )
  }
}

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT - 200,
    width: SCREEN_WIDTH - 25,
    marginTop: 20,
    alignSelf: 'center',
    padding: 30,
    position: 'absolute',
    left: -100,
    top: -40
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
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
 

 

 export default DiscoverScreen
