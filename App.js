import React from 'react';
import { 
  StyleSheet, 
  View 
} from 'react-native';
import StationsContainer from './components/StationsContainer'
import Heading from './components/Heading'
import TabBar from './components/TabBar'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      line: 'All'
    }
    this.setLine = this.setLine.bind(this)
  }

  setLine (line) {
    this.setState({ line })
  }

  render() {
    const { line } = this.state
    return (
      <View style={styles.container}>
        <Heading />
        <StationsContainer line={line} />
        <TabBar line={line} setLine={this.setLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
