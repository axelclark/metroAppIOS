import React from 'react'
import TrainButton from '../TrainButton'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const navigation = jest.fn()
  const tree = renderer.create(<TrainButton navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})
