import React from 'react';
import {
  withNavigation
} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';

class MapButton extends React.Component {
  render() {
    return (
      <Icon
        name='map'
        onPress={() => this.props.navigation.navigate('Metro Map')}
        size={25}
        style={{ marginRight: 15 }}
      />
    )
  }
}

export default withNavigation(MapButton);
