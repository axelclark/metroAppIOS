import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import TrainList from './TrainList'
import {
  BAR_STYLE,
  COLOR_BACKGROUND,
  COLOR_PRIMARY
} from '../constants/styles'

export default class SingleStation extends React.Component {
  state = {
    trains: [],
    loading: true,
    refreshing: false
  }

  componentDidMount() {
    this.fetchTrains()
  }

  fetchTrains = () => {
    let myRequest = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All"
    let myHeaders = new Headers();
    myHeaders.append("api_key", "a0363af8b5ab489bb2ce9479697aa70a");
    let myInit = {method: "Get", headers: myHeaders};
    fetch(myRequest, myInit)
      .then(res => res.json())
      .then(json => this.setState({ trains: json.Trains, loading: false }))
      .catch((err) => console.log('err:', err))
  }

  _onRefresh = () => {
    this.setState({refreshing: true, loading: true});
    this.fetchTrains()
    this.setState({refreshing: false});
  }

  getStationTrainsByGroup = (trains, stationCode, group) => {
    const stationTrains = this.filterTrainsByStation(
      trains,
      stationCode
    )
    return this.filterTrainsByGroup(stationTrains, group)
  }

  filterTrainsByStation = (trains, stationCode) => {
    return trains.filter(train => train.LocationCode === stationCode)
  }

  filterTrainsByGroup = (trains, group) => {
    return trains.filter(train => train.Group === group)
  }

  render() {
    const name = this.props.navigation.getParam('Name', 'No Station')
    const { trains, loading } = this.state
    const stationCode = this.props.navigation.getParam('Code', 'None')
    const platform1Trains = this.getStationTrainsByGroup(trains, stationCode, "1")
    const platform2Trains = this.getStationTrainsByGroup(trains, stationCode, "2")
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={BAR_STYLE}
          networkActivityIndicatorVisible={loading}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh()}
              title='Pull to Refresh'
            />
          }
        >
          <View>
            <Text style={styles.headerText}>{ name }</Text>
          </View>
          <View style={styles.platformContainer}>
            <Text style={styles.platformText}>Platform 1</Text>
            {
              this.state.loading ? <ActivityIndicator /> : (
                <TrainList trains={platform1Trains} />
              )
            }
          </View>
          <View style={styles.platformContainer}>
            <Text style={styles.platformText}>Platform 2</Text>
            {
              this.state.loading ? <ActivityIndicator /> : (
                <TrainList trains={platform2Trains} />
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLOR_PRIMARY,
    padding: 20,
    paddingBottom: 10
  },
  platformContainer: {
    padding: 20
  },
  platformText: {
    fontSize: 18,
    color: COLOR_PRIMARY,
    fontWeight: 'bold'
  }
});
