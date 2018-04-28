import React from 'react';
import { 
  AsyncStorage,
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
    this.getStations()
  }

  async getStations() {
    try {
      const persistedStations = await AsyncStorage.getItem('MetroApp:stations');
      if (persistedStations !== null) {
        this.setState({ stations: JSON.parse(persistedStations) });
      } else {
        const formattedStations = this.formattedStations(stationsData) 
        this.setState({ stations: formattedStations})
      }
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async saveStations(stations) {
    try {
      await AsyncStorage.setItem('MetroApp:stations', JSON.stringify(stations));
    } catch (error) {
      console.log("Error saving data" + error);
    }
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

  getStationsByLine = (allStations, line) => {
    const filteredStations = this.filterStationsByLine(allStations, line)
    const sortedByName = this.sortStationsByName(filteredStations)
    const favorites = this.filterFavorites(sortedByName)
    const regulars = this.rejectFavorites(sortedByName)
    const stations = [ ...favorites, ...regulars ]
    return stations;
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

  filterFavorites = (stations) => {
    return stations.filter(station => 
      station.Favorite === true
    )
  }

  rejectFavorites = (stations) => {
    return stations.filter(station => 
      station.Favorite === false
    )
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
    this.saveStations(stations)
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
