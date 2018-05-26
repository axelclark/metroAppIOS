import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { COLOR_PRIMARY } from '../constants/styles'

const Train = ({ train }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{train.Name}</Text>
    <Text style={styles.text}>Destination: {train.DestinationName}</Text>
    <Text style={styles.text}>Arrival in {train.Min} minutes</Text>
  </View>
)

const TrainList = ({ trains }) => {
  const renderTrains = trains.map((train) =>
    <Train
      key={train.DestinationCode + "-" + train.Min}
      train={train}
    />
  )

  return (
    <View>
      {renderTrains}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: COLOR_PRIMARY,
    fontSize: 18
  }
});

export default TrainList
