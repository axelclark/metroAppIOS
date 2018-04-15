import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import SingleStation from './components/SingleStation'

const App = StackNavigator(
  {
    Home: {
      screen: Home
    },
    SingleStation: {
      screen: SingleStation
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
