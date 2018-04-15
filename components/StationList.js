import React from 'react';
import { 
  FlatList,
  StyleSheet, 
  TouchableHighlight,
  Text, 
  View 
} from 'react-native';

const renderStation = ({ item, index }) => {
  return (
    <TouchableHighlight
      style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}
    >
      <Text style={styles.text}>{item.Name}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(23, 31, 61, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#171f3d',
    fontSize: 18
  }
});

const StationList = ({ stations }) => (
  <FlatList
    data={stations}
    keyExtractor={(item) => item.Code}
    renderItem={renderStation}
  />
)

export default StationList
