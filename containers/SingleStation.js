import React from 'react';
import StationStatus from '../components/StationStatus'

export default class SingleStation extends React.Component {
  constructor() {
    super();
    this.state = {
      trains: [],
      loading: true,
      refreshing: false,
      lastUpdated: null,
    };
  }

  componentDidMount() {
    this.fetchTrains()
  }

  getStationTrainsByGroup = (trains, stationCode, group) => {
    const stationTrains = this.filterTrainsByStation(
      trains,
      stationCode,
    )
    return this.filterTrainsByGroup(stationTrains, group)
  }

  filterTrainsByStation = (trains, stationCode) => (
    trains.filter(train => train.LocationCode === stationCode)
  )

  filterTrainsByGroup = (trains, group) => (
    trains.filter(train => train.Group === group)
  )

  fetchTrains = () => {
    const myRequest = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All'
    const myHeaders = new Headers();
    myHeaders.append('api_key', 'a0363af8b5ab489bb2ce9479697aa70a');
    const myInit = { method: 'Get', headers: myHeaders };
    const formatDate = date => new Date(date).toLocaleTimeString()
    fetch(myRequest, myInit)
      .then(res => res.json())
      .then(json => this.setState({
        trains: json.Trains,
        loading: false,
        lastUpdated: formatDate(Date.now()),
      }))
      .catch(err => console.log('err:', err))
  }

  handleRefresh = () => {
    this.setState({ refreshing: true, loading: true });
    this.fetchTrains()
    this.setState({ refreshing: false });
  }

  render() {
    const { trains, loading, refreshing, lastUpdated } = this.state
    const name = this.props.navigation.getParam('Name', 'No Station')
    const stationCode = this.props.navigation.getParam('Code', 'None')
    const platform1Trains = this.getStationTrainsByGroup(trains, stationCode, '1')
    const platform2Trains = this.getStationTrainsByGroup(trains, stationCode, '2')
    return (
      <StationStatus
        name={name}
        platform1Trains={platform1Trains}
        platform2Trains={platform2Trains}
        loading={loading}
        refreshing={refreshing}
        lastUpdated={lastUpdated}
        handleRefresh={() => this.handleRefresh()}
      />
    );
  }
}
