import React from 'react'
import Support from '../Support'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<Support />).toJSON()
  expect(tree).toMatchSnapshot()
})
