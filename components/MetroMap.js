import React from 'react';
import {
  StatusBar,
  View,
  WebView,
} from 'react-native';
import { BAR_STYLE } from '../constants/styles'

class MetroMap extends React.Component {
  state = {
    loading: true,
  }

  static navigationOptions = {
    drawerLabel: 'Metro Map',
  };

  render() {
    const { loading } = this.state
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          style={{ flex: 1 }}
          barStyle={BAR_STYLE}
          networkActivityIndicatorVisible={loading}
        />
        <WebView
          source={{ uri: 'https://www.wmata.com/schedules/maps/upload/2017-System-Map.pdf' }}
          onLoadEnd={() => this.setState({ loading: false })}
        />
      </View>
    );
  }
}

export default MetroMap
