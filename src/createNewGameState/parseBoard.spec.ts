import {
  parseBoard,
  getRanks,
  getRankCells,
  convertNumbersToPoints,
} from './parseBoard';

test('parseBoard()', () => {
  const received = parseBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  const expected = [
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
  ];

  expect(received).toStrictEqual(expected);
});

test('getRanks()', () => {
  const received = getRanks('pppp/PPPP/....');
  const expected = ['pppp', 'PPPP', '....'];

  expect(received).toStrictEqual(expected);
});

test('getRankCells()', () => {
  const received = getRankCells('p3');
  const expected = ['p', '.', '.', '.'];

  expect(received).toStrictEqual(expected);
});

test('convertNumbersToPoints()', () => {
  const received = convertNumbersToPoints('3pp3');
  const expected = '...pp...';

  expect(received).toBe(expected);
});
