import React from 'react';
import StationStatus from '../components/StationStatus'

export default class SingleStation extends React.Component {
  constructor() {
    super();
    this.state = {
      trains: [],
      loading: true,
      refreshing: false
    };
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

  handleRefresh = () => {
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
    const { trains, loading, refreshing } = this.state
    const name = this.props.navigation.getParam('Name', 'No Station')
    const stationCode = this.props.navigation.getParam('Code', 'None')
    const platform1Trains = this.getStationTrainsByGroup(trains, stationCode, "1")
    const platform2Trains = this.getStationTrainsByGroup(trains, stationCode, "2")
    return (
      <StationStatus
        name={name}
        platform1Trains={platform1Trains}
        platform2Trains={platform2Trains}
        loading={loading}
        refreshing={refreshing}
        handleRefresh={() => this.handleRefresh()}
      />
    );
  }
}
