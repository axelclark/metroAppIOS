import React from 'react';
import { 
  Text,
  View
} from 'react-native'
import trainsData from '../data/trains'
import TrainList from './TrainList'

export default class SingleStation extends React.Component {
  state = {
    trains: [],
    loading: true
  }

  componentDidMount() {
    let myRequest = "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All"
    let myHeaders = new Headers();
    myHeaders.append("api_key", "a0363af8b5ab489bb2ce9479697aa70a");
    let myInit = {method: "Get", headers: myHeaders};
    fetch(myRequest, myInit)
      .then(res => res.json())
      .then(json => this.setState({ trains: json.Trains, loading: false }))
      .catch((err) => console.log('err:', err))
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
    const { trains } = this.state
    const stationCode = this.props.navigation.getParam('Code', 'None')
    const platform1Trains = this.getStationTrainsByGroup(trains, stationCode, "1")
    const platform2Trains = this.getStationTrainsByGroup(trains, stationCode, "2")
    return (
      <View>
        <Text>{ name }</Text>
        <Text>Platform 1</Text>
        <TrainList trains={platform1Trains} />
        <Text>Platform 2</Text>
        <TrainList trains={platform2Trains} />
      </View>
    );
  }
}

