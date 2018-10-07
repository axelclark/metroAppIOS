import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import Home from './containers/Home'
import SingleStation from './containers/SingleStation'
import MetroMap from './components/MetroMap'
import MapButton from './components/MapButton'
import Support from './components/Support'
import MenuButton from './components/MenuButton'
import TrainButton from './components/TrainButton'
import {
  COLOR_PRIMARY,
  HEADER_COLOR_BACKGROUND,
} from './constants/styles'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SingleStation: {
      screen: SingleStation,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle: 'MetroApp',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: COLOR_PRIMARY,
      },
      headerStyle: {
        backgroundColor: HEADER_COLOR_BACKGROUND,
      },
      headerRight: <MapButton />,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
)

const MapStack = createStackNavigator(
  {
    MetroMap: {
      screen: MetroMap,
    },
  },
  {
    initialRouteName: 'MetroMap',
    navigationOptions: {
      headerTitle: 'Metro Map',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: COLOR_PRIMARY,
      },
      headerStyle: {
        backgroundColor: HEADER_COLOR_BACKGROUND,
      },
      headerLeft: <MenuButton />,
      headerRight: <TrainButton />,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
)

const SupportStack = createStackNavigator(
  {
    Support: {
      screen: Support,
    },
  },
  {
    initialRouteName: 'Support',
    navigationOptions: {
      headerTitle: 'Support',
      headerBackTitle: 'Back',
      headerTitleStyle: {
        color: COLOR_PRIMARY,
      },
      headerStyle: {
        backgroundColor: HEADER_COLOR_BACKGROUND,
      },
      headerLeft: <MenuButton />,
      headerRight: <TrainButton />,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
)
const Main = createDrawerNavigator({
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


const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <Main />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: HEADER_COLOR_BACKGROUND,
  },
})

export default App
