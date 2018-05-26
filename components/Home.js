import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native'
import FilteredStations from './FilteredStations'
import TabBar from './TabBar'
import MenuButton from './MenuButton'
import { COLOR_BACKGROUND } from '../constants/styles'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      line: 'All'
    }
    this.setLine = this.setLine.bind(this)
  }

  static navigationOptions = {
    headerLeft: <MenuButton />
  };

  setLine (line) {
    this.setState({ line })
  }

  navigate = (link, params) => {
    const { navigate } = this.props.navigation
    navigate(link, params)
  }

  render() {
    const { line } = this.state
    return (
      <View style={styles.container}>
        <FilteredStations line={line} navigate={this.navigate}/>
        <TabBar line={line} setLine={this.setLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

