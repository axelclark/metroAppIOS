import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const lines = [
  { title: 'All', code: 'All' },
  { title: 'Blue', code: 'BL' },
  { title: 'Green', code: 'GR' },
  { title: 'Orange', code: 'OR' },
  { title: 'Red', code: 'RD' },
  { title: 'Silver', code: 'SV' },
  { title: 'Yellow', code: 'YL' }
]
 
const TabBar = ({ setLine, line }) => (
  <View style={styles.container}>
    {lines.map(lineData => 
      <TabBarItem  
        line={line} 
        title={lineData.title}
        lineCode={lineData.code}
        key={lineData.code}
        setLine={() => setLine(lineData.code)} 
      />
    )}
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
