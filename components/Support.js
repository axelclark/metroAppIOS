import React from 'react';
import {
  Linking,
  StatusBar,
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { BAR_STYLE } from '../constants/styles'

class Support extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Support',
  };

  render() {
    return (
      <View>
        <StatusBar barStyle={BAR_STYLE} />
        <List>
          <ListItem
            onPress={() => Linking.openURL('mailto://wmatametroapp@gmail.com')}
            title="Email Support for Questions/Feedback"
          />
        </List>
      </View>
    );
  }
}

export default Support
