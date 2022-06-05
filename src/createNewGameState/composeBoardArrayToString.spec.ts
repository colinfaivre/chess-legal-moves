import {
  composeBoardArrayToString,
  convertPointsToNumbers,
} from './composeBoardArrayToString';

test('composeBoardArrayToString()', () => {
  const received = composeBoardArrayToString([
    'R',
    'N',
    'B',
    'Q',
    'K',
    'B',
    'N',
    'R',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    'P',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    'p',
    'p',
    'p',
    'p',
    'p',
    'p',
    'p',
    'p',
    'r',
    'n',
    'b',
    'q',
    'k',
    'b',
    'n',
    'r',
  ]);
  const expected = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

  expect(received).toStrictEqual(expected);
});

test('convertPointsToNumbers()', () => {
  const received = convertPointsToNumbers('..../..p./ppp./.p../p...');
  const expected = '4/2p./ppp./.p2/p3';

  expect(received).toBe(expected);
});
