import React from 'react';
import { Linking } from 'react-native';
import { List, ListItem } from 'react-native-elements'

class Support extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Support'
  };

  render() {
    return (
      <List>
        <ListItem
          onPress={() => Linking.openURL("mailto://wmatametroapp@gmail.com")}
          title={"Email Support for Questions/Feedback"}
        />
      </List>
    );
  }
}

export default Support
