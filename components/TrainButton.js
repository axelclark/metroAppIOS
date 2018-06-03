import React from 'react'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR_PRIMARY } from '../constants/styles'

const TrainButton = ({ navigation }) => (
  <Icon
    name="subway"
    onPress={() => navigation.navigate('Home')}
    size={25}
    style={{ marginRight: 15 }}
    color={COLOR_PRIMARY}
  />
)

export default withNavigation(TrainButton)
