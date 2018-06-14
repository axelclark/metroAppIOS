import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements'
import {
  COLOR_PRIMARY,
  COLOR_BORDER,
  COLOR_BACKGROUND,
} from '../constants/styles'
import lineToColor from '../constants/lineToColor'
import getStationLines from '../utils/getStationLines'

export default class StationList extends React.PureComponent {
  onPressItem = (item) => {
    this.props.navigate('SingleStation', item)
  };

  renderStation = ({ item, index }) => {
    const stationLines = getStationLines(item)
    const renderIcons = stationLines.map(line => (
      <Icon
        key={line}
        name="directions-transit"
        size={14}
        color={lineToColor[line]}
      />
    ))
    return (
      <View style={[styles.stationContainer, { borderTopWidth: index === 0 ? 1 : null }]}>
        <TouchableHighlight
          onPress={() => { this.onPressItem(item) }}
          style={[styles.item]}
        >
          <Text>
            <Text style={styles.text}>{item.Name} </Text>
            {renderIcons}
          </Text>
        </TouchableHighlight>
        <Icon
          style={styles.icon}
          name={item.Favorite === true ? 'favorite' : 'favorite-border'}
          size={30}
          color={COLOR_PRIMARY}
          onPress={() => this.props.onPressIcon(item)}
        />
      </View>
    )
  }

  render() {
    const {
      stations,
      navigate,
      handleOnChange,
      handleOnClear,
      value,
    } = this.props

    return (
      <View style={styles.container}>
        <SearchBar
          clearIcon={{ color: 'gray' }}
          searchIcon={{ size: 24 }}
          onChangeText={handleOnChange}
          onClear={handleOnClear}
          placeholder="Type Here To Filter..."
          containerStyle={styles.searchBarContainer}
          inputStyle={{ backgroundColor: '#F5F5F5' }}
          value={value}
        />
        <FlatList
          data={stations}
          keyExtractor={item => item.Code}
          renderItem={this.renderStation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: COLOR_BACKGROUND,
    borderTopColor: COLOR_BORDER,
    borderBottomColor: COLOR_BORDER,
  },
  stationContainer: {
    flex: 1,
    flexDirection: 'row',
    borderColor: COLOR_BORDER,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  item: {
    padding: 15,
    paddingLeft: 20,
    justifyContent: 'center',
    flex: 6,
  },
  text: {
    color: COLOR_PRIMARY,
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
    padding: 15,
  },
});
