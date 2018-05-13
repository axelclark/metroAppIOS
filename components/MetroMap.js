import React from 'react';
import {
  WebView
} from 'react-native';

class MetroMap extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Metro Map'
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://www.wmata.com/schedules/maps/upload/2017-System-Map.pdf'}}
      />
    );
  }
}

export default MetroMap
