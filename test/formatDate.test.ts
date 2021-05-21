import formatDate from "../src/index";

test('formats Date to readable date', () => {
  expect(formatDate(new Date('2021-05-21T02:22:03.220Z')).date).toBe('21st May 2021')
});

test('formats Date to readable time', () => {
  expect(formatDate(new Date('2021-05-21T02:22:03.220Z')).time).toBe('07:52:03 AM')
});