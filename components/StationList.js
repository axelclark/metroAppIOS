import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StationList extends React.PureComponent {
  onPressItem = (item) => {
    this.props.navigate('SingleStation', item)
  };

  renderStation = ({ item, index }) => {
    return (
      <View style={[styles.stationContainer, { borderTopWidth: index === 0 ? 1 : null }]}>
        <TouchableHighlight
          onPress={()=>{this.onPressItem(item)}}
          style={[styles.item,]}
        >
          <Text style={styles.text}>{item.Name}</Text>
        </TouchableHighlight>
        <Icon
          style={styles.icon}
          name={item.Favorite === true ? 'favorite' : 'favorite-border'}
          size={30}
          color="black"
          onPress={() => this.props.onPressIcon(item)}
        />
      </View>
    )
  }

  render() {
    const { stations, navigate } = this.props
    return (
      <FlatList
        data={stations}
        keyExtractor={(item) => item.Code}
        renderItem={this.renderStation}
      />
    )
  }
}

const styles = StyleSheet.create({
  stationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'rgba(23, 31, 61, .2)',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    paddingLeft: 20,
    justifyContent: 'center',
    flex: 6
  },
  text: {
    color: '#171f3d',
    fontSize: 18
  },
  icon: {
    alignSelf: 'center',
    padding: 20,
  }
});
