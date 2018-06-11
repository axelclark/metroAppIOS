import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLOR_PRIMARY } from '../constants/styles'

const Arrival = ({ mins }) => {
  switch (mins) {
    case 'BRD':
      return <Text style={styles.text}>Boarding!</Text>
    case 'ARR':
      return <Text style={styles.text}>Train is arriving...</Text>
    case '1':
      return <Text style={styles.text}>Arrival in 1 minute</Text>
    case '':
      return <Text style={styles.text}>Arrival in TBD minutes</Text>
    default:
      return <Text style={styles.text}>Arrival in {mins} minutes</Text>
  }
}

const Train = ({ train }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{train.Name}</Text>
    <Text style={styles.text}>Destination: {train.DestinationName}</Text>
    <Arrival mins={train.Min} />
  </View>
)

const TrainList = ({ trains }) => {
  if (trains.length) {
    const renderTrains = trains.map(train =>
      (<Train
        key={`${train.DestinationCode}-${train.Min}`}
        train={train}
      />))

    return (
      <View>
        {renderTrains}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No trains are currently scheduled</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: COLOR_PRIMARY,
    fontSize: 18,
  },
});

export default TrainList
