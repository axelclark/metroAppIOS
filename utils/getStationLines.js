const getStationLines = (station) => {
  const lineCodes = [
    station.LineCode1,
    station.LineCode2,
    station.LineCode3,
    station.LineCode4,
  ]

  return removeNulls(lineCodes)
}

const removeNulls = lineCodes => lineCodes.filter(Boolean)

export default getStationLines
