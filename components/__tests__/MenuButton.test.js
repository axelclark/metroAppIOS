import React from 'react'
import MenuButton from '../MenuButton'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const navigation = jest.fn()
  const tree = renderer.create(<MenuButton navigation={navigation} />).toJSON()
  expect(tree).toMatchSnapshot()
})
