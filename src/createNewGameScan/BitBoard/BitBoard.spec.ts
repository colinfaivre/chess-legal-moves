import BitBoard from './BitBoard';

test('BitBoard | clearBit()', () => {
  const received = BitBoard.fromPositions([0, 1, 2, 3, 4, 5, 6, 7]).clearBit(0);
  const expected = new BitBoard(254, 0);

  expect(received).toStrictEqual(expected);
});

test('BitBoard | bitScanForward()', () => {
  const myBitBoard = BitBoard.fromPositions([0, 1, 2, 3, 4, 5, 6, 7]);
  const received = myBitBoard.bitScanForward();
  const expected = 0;

  expect(received).toBe(expected);
});

test('BitBoard | bitScanReverse()', () => {
  const myBitBoard = BitBoard.fromPositions([0, 1, 2, 3, 4, 5, 6, 7]);
  const received = myBitBoard.bitScanReverse();
  const expected = 7;

  expect(received).toBe(expected);
});

test('BitBoard | shiftLeft()', () => {
  const myBitBoard = BitBoard.fromPositions([0, 1, 2, 3, 4, 5, 6, 7]);
  const received = myBitBoard.shiftLeft(8);
  const expected = new BitBoard(65280, 0);

  expect(received).toStrictEqual(expected);
});
