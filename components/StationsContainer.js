import React from 'react';
import { 
  View 
} from 'react-native';
import stationsData from '../data/stations'
import StationList from './StationList'

export default class StationsContainer extends React.Component {

  getStationsByLine = (stations, line) => {
    const filteredStations = this.filterStationsByLine(stations, line);
    return this.sortStationsByName(filteredStations);
  }

  filterStationsByLine = (stations, line) => {
    switch (line) {
      case 'All':
        return stations
      default:
        return stations.filter(station => 
          line === station.LineCode1 ||
          line === station.LineCode2 ||
          line === station.LineCode3 ||
          line === station.LineCode4)
    }
  }

  sortStationsByName = (stations) => { 
    return stations.sort((stationA, stationB) => 
      this.compareStationNames(stationA, stationB))
  }

  compareStationNames = (stationA, stationB) => {
    const a = stationA.Name.toLowerCase()
    const b = stationB.Name.toLowerCase()
    return a < b ? -1 : a > b ? 1 : 0
  }

  render() {
    const stations = this.getStationsByLine(stationsData.Stations, this.props.line)
    return (
      <StationList stations={stations} />
    );
  }
}
