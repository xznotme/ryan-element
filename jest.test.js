test('common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('to bo true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('testfor number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('testfor object', () => {
  expect({name: 'Ryan'}).toEqual({name: 'Ryan'})
})
