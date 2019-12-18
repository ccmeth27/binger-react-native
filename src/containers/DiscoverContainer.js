import React, {Component, Fragment} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements'
import DiscoverCard from "./DiscoverCard";
import ActionButtons from './ActionButtons'
import DiscoverScreen from './screens/DiscoverScreen'
class DiscoverContainer extends Component {

    state = {
        movies: [],
        loading: true
    }
    
    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies() {
        fetch(`http://api-public.guidebox.com/v2/movies?api_key=b2636036f4e6d0d8841b339a37d3b4c4cff03bd5`)
        .then(resp => resp.json())
        .then(movieData =>{
            this.setState({
            movies: movieData.results,
            loading: false
            })
        }
        )
    }

    render() {
        return(
            <Fragment>
                <Header style={styles.header}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'binger', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                {this.state.loading ?
                <View style={{ flex: 1 }}>
                    
                    <Text style={styles.loading}>Loading...</Text>
                
                    <ActionButtons style={styles.buttons} />
                </View>
                :
                 <View style={{ flex: 1 }}> 
                    {this.state.movies.map(movie => <Swipe style={{ flex: 1 }} key={movie.id} movie={movie}/>).reverse()}
                    <ActionButtons style={styles.buttons} />
                </View>
                }
            </Fragment>
        )
    }
}
export default DiscoverContainer

const guideBoxAPI = 'b2636036f4e6d0d8841b339a37d3b4c4cff03bd5'
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
        bottom: 20,
    },
    loading:{
        fontSize: 40,
        justifyContent: 'center',
        alignSelf: 'center'
    }


})