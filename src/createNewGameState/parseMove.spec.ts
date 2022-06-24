import { parseMove, mapPositionToBoardIndex } from './parseMove';

test('parseMove() | common move', () => {
  const received = parseMove('a2a3');
  const expected = {
    move: [8, 16],
  };

  expect(received).toStrictEqual(expected);
});

test('parseMove() | promotion move', () => {
  const received = parseMove('h7h8Q');
  const expected = {
    move: [55, 63],
    promotionPiece: 'Q',
  };

  expect(received).toStrictEqual(expected);
});

test('parseMove() | castling move', () => {
  const received = parseMove('e1g1');
  const expected = {
    move: [4, 6],
    castling: {
      rookMove: [7, 5],
      letter: 'K',
    },
  };

  expect(received).toStrictEqual(expected);
});

test('parseMove() | pawn double move', () => {
  const received = parseMove('a2a4');
  const expected = {
    move: [8, 24],
    enPassantTarget: 'a3',
  };

  expect(received).toStrictEqual(expected);
});

test('mapPositionToBoardIndex() | a1', () => {
  const received = mapPositionToBoardIndex('a1');
  const expected = 0;

  expect(received).toBe(expected);
});

test('mapPositionToBoardIndex() | h8', () => {
  const received = mapPositionToBoardIndex('h8');
  const expected = 63;

  expect(received).toBe(expected);
});

test('mapPositionToBoardIndex() | f3', () => {
  const received = mapPositionToBoardIndex('f3');
  const expected = 21;

  expect(received).toBe(expected);
});

test('mapPositionToBoardIndex() | c3', () => {
  const received = mapPositionToBoardIndex('c3');
  const expected = 18;

  expect(received).toBe(expected);
});
