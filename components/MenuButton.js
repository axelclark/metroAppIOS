import React from 'react'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR_PRIMARY } from '../constants/styles'

const MenuButton = ({ navigation }) => (
  <Icon
    name="menu"
    onPress={() => navigation.toggleDrawer()}
    size={25}
    style={{ marginLeft: 15 }}
    color={COLOR_PRIMARY}
  />
)

export default withNavigation(MenuButton)
