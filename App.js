import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import StationStatus from './components/StationStatus'

const App = StackNavigator(
  {
    Home: {
      screen: Home
    },
    StationStatus: {
      screen: StationStatus
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: 'MetroApp',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: '#171f3d'
      }
    }
  }
)

export default App
