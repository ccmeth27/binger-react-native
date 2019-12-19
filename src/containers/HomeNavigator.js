import react from 'react'
import { Icon } from 'react-native-vector-icons/Ionicons';  
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator  } from 'react-navigation-tabs'
import HomeContainer from './HomeContainer'
import ProfileScreen from '../screens/ProfileScreen'



const HomeNavigator = createAppContainer(
    createBottomTabNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
        }
      },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
        }
      }
    })
)
export default HomeNavigator