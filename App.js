import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation'
import Home from './containers/Home'
import SingleStation from './containers/SingleStation'
import MetroMap from './components/MetroMap'
import MapButton from './components/MapButton'
import Support from './components/Support'
import MenuButton from './components/MenuButton'
import TrainButton from './components/TrainButton'
import { COLOR_PRIMARY } from './constants/styles'

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
        color: COLOR_PRIMARY
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
        color: COLOR_PRIMARY
      },
      headerLeft: <MenuButton />,
      headerRight: <TrainButton />
    }
  }
)

const SupportStack = createStackNavigator(
  {
    Support: {
      screen: Support
    }
  },
  {
    initialRouteName: 'Support',
    navigationOptions: {
      headerTitle: 'Support',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: COLOR_PRIMARY
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
  Support: {
    screen: SupportStack,
  },
});

export default App
