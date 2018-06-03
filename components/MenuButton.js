import React from 'react';
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLOR_PRIMARY } from '../constants/styles'

class MenuButton extends React.Component {
  render() {
    return (
      <Icon
        name="menu"
        onPress={() => this.props.navigation.toggleDrawer()}
        size={25}
        style={{ marginLeft: 15 }}
        color={COLOR_PRIMARY}
      />
    )
  }
}

export default withNavigation(MenuButton);
