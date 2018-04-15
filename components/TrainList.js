import React from 'react';
import { 
  FlatList,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

export default class TrainList extends React.PureComponent {

  renderTrain = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item.Name}</Text>
        <Text style={styles.text}>Destination: {item.DestinationName}</Text>
        <Text style={styles.text}>Arrival in {item.Min} minutes</Text>
      </View>
    )
  }

  render() {
    const { trains } = this.props
    return (
      <FlatList
        data={trains}
        keyExtractor={(train) => train.DestinationCode + "-" + train.Min}
        renderItem={this.renderTrain}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: '#171f3d',
    fontSize: 18
  }
});
