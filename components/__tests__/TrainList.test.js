import React from 'react'
import TrainList from '../TrainList'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const trains = [
    {
      "Car": "8",
      "Destination": "Shady Gr",
      "DestinationCode": "A15",
      "DestinationName": "Shady Grove",
      "Group": "2",
      "Line": "RD",
      "LocationCode": "A05",
      "LocationName": "Cleveland Park",
      "Min": "BRD"
    },
    {
      "Car": "8",
      "Destination": "Shady Gr",
      "DestinationCode": "A15",
      "DestinationName": "Shady Grove",
      "Group": "2",
      "Line": "RD",
      "LocationCode": "A05",
      "LocationName": "Cleveland Park",
      "Min": "ARR"
    },
    {
      "Car": "8",
      "Destination": "Shady Gr",
      "DestinationCode": "A15",
      "DestinationName": "Shady Grove",
      "Group": "2",
      "Line": "RD",
      "LocationCode": "A09",
      "LocationName": "Bethesda",
      "Min": "10"
    },
    {
      "Car": "8",
      "Destination": "Shady Gr",
      "DestinationCode": "A15",
      "DestinationName": "Shady Grove",
      "Group": "2",
      "Line": "RD",
      "LocationCode": "A09",
      "LocationName": "Bethesda",
      "Min": ""
    }
  ]
  const tree = renderer.create(<TrainList trains={trains}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders when no trains scheduled', () => {
  const trains = []
  const tree = renderer.create(<TrainList trains={trains}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
