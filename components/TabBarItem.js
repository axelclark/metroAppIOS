import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
 
const TabBarItem = ({ border, title, selected, setLine, line }) => (
  <TouchableHighlight
    underlayColor='#efefef'
    onPress={setLine}
    style={[
      styles.item, selected ? styles.selected : null,
      border ? styles.border : null,
      line === title ? styles.selected : null ]}>
    <Text style={[ styles.itemText, line === title ? styles.bold : null ]}>
      {title}
    </Text>
  </TouchableHighlight>
)
 
const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd'
  },
  itemText: {
    color: '#777777',
    fontSize: 12
  },
  selected: {
    backgroundColor: '#ffffff'
  },
  bold: {
    fontWeight: 'bold'
  }
})
 
export default TabBarItem
