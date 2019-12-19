import React, {Component, Fragment} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements'
import ActionButtons from './ActionButtons'
import DiscoverScreen from '../screens/DiscoverScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ProfileScreen from '../screens/ProfileScreen';

class HomeContainer extends Component {

    state = {
        movies: [],
        loading: true
    }
    
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies() {
        fetch(`http://api-public.guidebox.com/v2/movies?api_key=ecdec86bafadac43c038330199eec79294c468d8`)
        .then(resp => resp.json())
        .then(movieData =>{
            this.setState({
            movies: movieData.results,
            loading: false
            })
        })
        .catch((error) => {
            console.error(error);
          });
    }

    render() {
        return(
            <View>
                {this.state.loading ?
                <View style={{ flex: 1 }}>
                    <Text style={styles.loading}>Loading...</Text>
                </View>
                :
                 <View style={{ flex: 1 }}> 
                    {this.state.movies.map(movie => <DiscoverScreen style={{ flex: 1 }} key={movie.id} movie={movie}/>).reverse()}
                    <ActionButtons style={styles.buttons} />
                </View>
                }
            </View>
        )
    }
}

export default HomeContainer

const guideBoxAPI = 'ecdec86bafadac43c038330199eec79294c468d8'
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        width: SCREEN_WIDTH,
        height: 20

    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
    },
    loading:{
        fontSize: 40,
        justifyContent: 'center',
        alignSelf: 'center'
    }


})