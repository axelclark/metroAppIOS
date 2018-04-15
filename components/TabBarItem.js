import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
 
const TabBarItem = ({ border, title, lineCode, selected, setLine, line }) => (
  <TouchableHighlight
    underlayColor='#efefef'
    onPress={setLine}
    style={[
      styles.item, selected ? styles.selected : null,
      border ? styles.border : null,
      line === lineCode ? styles.selected : null ]}>
    <Text style={[ styles.itemText, line === lineCode ? styles.bold : null ]}>
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
    color: '#171f3d',
    fontSize: 12
  },
  selected: {
    backgroundColor: '#f0f0f5'
  },
  bold: {
    fontWeight: 'bold'
  }
})
 
export default TabBarItem
