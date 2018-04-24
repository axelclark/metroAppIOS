import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
 
const TabBarItem = ({ title, lineCode, selected, setLine, line }) => (
  <TouchableHighlight
    underlayColor='#efefef'
    onPress={setLine}
    style={[
      styles.item, selected ? styles.selected : null,
      title !== 'All' ? styles.border : null,
      line === lineCode ? styles[title] : null
    ]}>
    <Text style={[ 
      styles.itemText, 
      line === lineCode ? [styles.bold, styles[line]] : null 
    ]}>
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
  bold: {
    fontWeight: 'bold'
  },
  All: {
    backgroundColor: '#f0f0f5'
  },
  Blue: {
    backgroundColor: 'blue'
  },
  Green: {
    backgroundColor: 'green'
  },
  Orange: {
    backgroundColor: 'orange'
  },
  Red: {
    backgroundColor: 'red'
  },
  Silver: {
    backgroundColor: 'gray'
  },
  Yellow: {
    backgroundColor: 'yellow'
  },
  BL: {
    color: 'white'
  },
  GR: {
    color: 'white'
  },
  RD: {
    color: 'white'
  },
  SV: {
    color: 'white'
  }
})
 
export default TabBarItem
