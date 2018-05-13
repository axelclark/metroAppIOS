import React from 'react';
import {
  withNavigation
} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';

class TrainButton extends React.Component {
  render() {
    return (
      <Icon
        name='subway'
        onPress={() => this.props.navigation.navigate('Home')}
        size={25}
        style={{ marginRight: 15 }}
      />
    )
  }
}

export default withNavigation(TrainButton);
