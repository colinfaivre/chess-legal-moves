import {
  updateFenBoard,
  isPawn,
  isCapture,
  incrementFullMoveClock,
  incrementHalfMoveClock,
  toggleHasToPlay,
  updateAvailableCastlings,
} from './helpers';

test('isPawn() | pawn', () => {
  const received1 = isPawn('p');
  const received2 = isPawn('P');

  expect(received1).toBe(true);
  expect(received2).toBe(true);
});

test('isPawn() | not pawn', () => {
  const received1 = isPawn('x');
  const received2 = isPawn('');

  expect(received1).toBe(false);
  expect(received2).toBe(false);
});

test('isCapture() | capture', () => {
  const received1 = isCapture('p', 'P');
  const received2 = isCapture('Q', 'n');

  expect(received1).toBe(true);
  expect(received2).toBe(true);
});

test('isCapture() | not capture', () => {
  const received1 = isCapture('K', '.');
  const received2 = isCapture('p', '.');

  expect(received1).toBe(false);
  expect(received2).toBe(false);
});

test('updateFenBoard()', () => {
  const received = updateFenBoard(
    'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR'
  );
  const expected = 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR';

  expect(received).toBe(expected);
});

test('incrementFullMoveClock()', () => {
  const received = incrementFullMoveClock(1);
  const expected = 2;

  expect(received).toBe(expected);
});

test('incrementHalfMoveClock()', () => {
  const received = incrementHalfMoveClock(1);
  const expected = 2;

  expect(received).toBe(expected);
});

test('toggleHasToPlay() | w', () => {
  const received = toggleHasToPlay('w');
  const expected = 'b';

  expect(received).toBe(expected);
});

test('toggleHasToPlay() | b', () => {
  const received = toggleHasToPlay('b');
  const expected = 'w';

  expect(received).toBe(expected);
});

test('updateAvailableCastlings() | K', () => {
  const received1 = updateAvailableCastlings('KQkq', 'K');
  const expected1 = 'kq';

  expect(received1).toBe(expected1);

  const received2 = updateAvailableCastlings('KQ', 'K');
  const expected2 = '-';

  expect(received2).toBe(expected2);
});

test('updateAvailableCastlings() | Q', () => {
  const received1 = updateAvailableCastlings('KQkq', 'Q');
  const expected1 = 'kq';

  expect(received1).toBe(expected1);

  const received2 = updateAvailableCastlings('KQ', 'Q');
  const expected2 = '-';

  expect(received2).toBe(expected2);
});

test('updateAvailableCastlings() | k', () => {
  const received1 = updateAvailableCastlings('KQkq', 'k');
  const expected1 = 'KQ';

  expect(received1).toBe(expected1);

  const received2 = updateAvailableCastlings('kq', 'k');
  const expected2 = '-';

  expect(received2).toBe(expected2);
});

test('updateAvailableCastlings() | q', () => {
  const received1 = updateAvailableCastlings('KQkq', 'q');
  const expected1 = 'KQ';

  expect(received1).toBe(expected1);

  const received2 = updateAvailableCastlings('kq', 'q');
  const expected2 = '-';

  expect(received2).toBe(expected2);
});
