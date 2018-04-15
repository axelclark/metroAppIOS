import React from 'react';
import { 
  FlatList,
  StyleSheet, 
  TouchableHighlight,
  Text, 
  View 
} from 'react-native';

class StationList extends React.PureComponent {

  onPressItem = (item) => { 
    this.props.navigate('StationStatus', item)
  };

  renderStation = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={()=>{this.onPressItem(item)}}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}
      >
        <Text style={styles.text}>{item.Name}</Text>
      </TouchableHighlight>
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

export default StationList
