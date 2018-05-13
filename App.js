import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'
import Home from './components/Home'
import SingleStation from './components/SingleStation'
import MetroMap from './components/MetroMap'
import MapButton from './components/MapButton'
import MenuButton from './components/MenuButton'
import TrainButton from './components/TrainButton'

const RootStack = createStackNavigator(
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
      },
      headerRight: <MapButton />
    }
  }
)

const MapStack = createStackNavigator(
  {
    MetroMap: {
      screen: MetroMap
    }
  },
  {
    initialRouteName: 'MetroMap',
    navigationOptions: {
      headerTitle: 'Metro Map',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: '#171f3d'
      },
      headerLeft: <MenuButton />,
      headerRight: <TrainButton />
    }
  }
)

const App = createDrawerNavigator({
  Home: {
    screen: RootStack,
  },
  'Metro Map': {
    screen: MapStack,
  },
});

export default App
