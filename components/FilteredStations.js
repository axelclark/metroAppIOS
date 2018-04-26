import React from 'react';
import { 
  View 
} from 'react-native';
import stationsData from '../data/stations'
import StationList from './StationList'

export default class FilteredStations extends React.Component {
  constructor() {
    super()
    this.state = {
      stations: []
    }
    this.toggleFavoriteStation = this.toggleFavoriteStation.bind(this)
  }

  componentDidMount() {
    const stations = this.formattedStations(stationsData)
    this.setState({ stations })
  }

  addFavoriteKey = (stationsList) => {
    return stationsList.map(station => 
      Object.assign({}, station, {Favorite: false})
    )
  }

  formattedStations = (stations) => {
    const stationsList = stations.Stations
    return this.addFavoriteKey(stationsList)
  }


  getStationsByLine = (stations, line) => {
    const filteredStations = this.filterStationsByLine(stations, line);
    return this.sortStations(filteredStations);
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

  sortStations = (stations) => {
    const sortedByName = this.sortStationsByName(stations)
    return this.sortStationsByFav(sortedByName)
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

  sortStationsByFav = (stations) => { 
    return stations.sort((stationA, stationB) => 
      this.compareStationFavs(stationA, stationB))
  }

  compareStationFavs = (stationA, stationB) => {
    const a = stationA.Favorite
    const b = stationB.Favorite
    return a > b ? -1 : a > b ? 1 : 0
  }

  filterFavoriteStations = (stations) => {
    return stations.filter(station => 
      station.Favorite === true
    )
  }

  getFavoriteStations = (stations) => {
    const favoriteStations = this.filterFavoriteStations(stations);
    return this.sortStationsByName(favoriteStations);
  }

  toggleFavoriteStation = (favoriteStation) => {
    const stations = this.state.stations.map(station => {
      if (station.Code === favoriteStation.Code) {
        return Object.assign({}, station, {
          Favorite: !station.Favorite
        })
      } else {
        return station
      }
    })
    this.setState({ stations })
  }

  render() {
    const stations = this.getStationsByLine(this.state.stations, this.props.line)
    const { navigate } = this.props 
    return (
      <StationList 
        stations={stations} 
        navigate={navigate} 
        onPressIcon={this.toggleFavoriteStation}
      />
    );
  }
}
