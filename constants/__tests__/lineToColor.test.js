import lineToColor from '../lineToColor';

test('BL lineCode returns Blue', () => {
  expect(lineToColor['BL']).toBe('blue');
});

test('All lineCode returns #f0f0f5', () => {
  expect(lineToColor['All']).toBe('#f0f0f5');
});
