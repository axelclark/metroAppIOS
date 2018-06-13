import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR_PRIMARY } from '../constants/styles'
import lineToColor from '../constants/lineToColor'

const Destination = ({ destinationName, line, cars }) => (
  <Text>
    <Text style={styles.text}>{destinationName} </Text>
    <Icon
      name="directions-transit"
      size={14}
      color={lineToColor[line]}
    />
    <Text style={styles.text}> {cars} cars</Text>
  </Text>
)

const Arrival = ({ mins }) => {
  switch (mins) {
    case 'BRD':
      return <Text style={[[styles.text], [styles.bold]]}>Boarding!</Text>
    case 'ARR':
      return <Text style={styles.text}>Train is arriving...</Text>
    case '':
      return <Text style={styles.text}>TBD minutes</Text>
    case '1':
      return (
        <Text>
          <Text style={[[styles.text], [styles.bold]]}>1 </Text>
          <Text style={styles.text}>minute</Text>
        </Text>
      )
    default:
      return (
        <Text>
          <Text style={[[styles.text], [styles.bold]]}>{mins} </Text>
          <Text style={styles.text}>minutes</Text>
        </Text>
      )
  }
}

const Train = ({ train }) => (
  <View style={styles.container}>
    <Destination
      destinationName={train.DestinationName}
      line={train.Line}
      cars={train.Car}
    />
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
    marginTop: 10,
  },
  text: {
    color: COLOR_PRIMARY,
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TrainList
