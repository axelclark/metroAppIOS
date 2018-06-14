import getStationLines from '../getStationLines';

test('return one station color', () => {
  station = {
    "Code":"A01",
    "Name":"Metro Center",
    "LineCode1":"RD",
    "LineCode2":null,
    "LineCode3":null,
    "LineCode4":null,
  }

  expect(getStationLines(station)).toEqual(["RD"]);
});

test('return all station colors', () => {
  station = {
    "Code":"A01",
    "Name":"Metro Center",
    "LineCode1":"RD",
    "LineCode2":"YL",
    "LineCode3":"BL",
    "LineCode4":"SV",
  }

  expect(getStationLines(station)).toEqual(["RD", "YL", "BL", "SV"]);
});
