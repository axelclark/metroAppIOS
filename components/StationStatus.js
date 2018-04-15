import React from 'react';
import { 
  Text
} from 'react-native'

export default class StationStatus extends React.Component {
  render() {
    const name = this.props.navigation.getParam('Name', 'Station')
    return (
      <Text>{ name }</Text>
    );
  }
}

