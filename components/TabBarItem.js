import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { COLOR_PRIMARY, COLOR_BORDER } from '../constants/styles'

const TabBarItem = ({
  title, lineCode, setLine, line,
}) => (
  <TouchableHighlight
    underlayColor="#efefef"
    onPress={setLine}
    style={[
      styles.item,
      title !== 'All' ? styles.border : null,
      line === lineCode ? styles[title] : null,
    ]}
  >
    <Text style={[
      styles.itemText,
      line === lineCode ? [styles.bold, styles[line]] : null,
    ]}
    >
      {title}
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: COLOR_BORDER,
  },
  itemText: {
    color: COLOR_PRIMARY,
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  All: {
    backgroundColor: '#f0f0f5',
  },
  Blue: {
    backgroundColor: 'blue',
  },
  Green: {
    backgroundColor: 'green',
  },
  Orange: {
    backgroundColor: 'orange',
  },
  Red: {
    backgroundColor: 'red',
  },
  Silver: {
    backgroundColor: 'gray',
  },
  Yellow: {
    backgroundColor: 'yellow',
  },
  BL: {
    color: 'white',
  },
  GR: {
    color: 'white',
  },
  RD: {
    color: 'white',
  },
  SV: {
    color: 'white',
  },
})

export default TabBarItem
