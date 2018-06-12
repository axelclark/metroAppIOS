import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { COLOR_PRIMARY, COLOR_BORDER } from '../constants/styles'
import lineToColor from '../constants/lineToColor'

const TabBarItem = ({
  title, lineCode, setLine, line,
}) => (
  <TouchableHighlight
    underlayColor="#efefef"
    onPress={setLine}
    style={[
      styles.item,
      title !== 'All' ? styles.border : null,
      line === lineCode ? { backgroundColor: lineToColor[line] } : null,
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
