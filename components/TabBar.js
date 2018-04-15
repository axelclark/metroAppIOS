import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'
 
const TabBar = ({ setLine, line }) => (
  <View style={styles.container}>
    <TabBarItem  line={line} title='All'
      setLine={() => setLine('All')} />
    <TabBarItem line={line} border title='Blue'
      setLine={() => setLine('BL')} />
    <TabBarItem line={line} border title='Green'
      setLine={() => setLine('GR')} />
    <TabBarItem line={line} border title='Orange'
      setLine={() => setLine('OR')} />
    <TabBarItem line={line} border title='Red'
      setLine={() => setLine('RD')} />
    <TabBarItem line={line} border title='Silver'
      setLine={() => setLine('SV')} />
    <TabBarItem line={line} border title='Yellow'
      setLine={() => setLine('YL')} />
  </View>
)
 
const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  }
})
 
export default TabBar
