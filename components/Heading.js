import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      MetroApp
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    backgroundColor: '#171f3d',
    alignSelf: 'stretch'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 36,
    color: '#fff',
    fontWeight: '100',
    margin: 10
  }
})

export default Heading
