import BitBoard from '../../BitBoard/BitBoard';
import Board from '../../Board/Board';
import {
  getPositiveRayAttacks,
  getNegativeRayAttacks,
} from './occupiedBoardRayAttacks';
import { RAYS } from './rays';

test('getPositiveRayAttacks() | starting position - north - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
  const expected = BitBoard.fromPos(8);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - east - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'ea', 0);
  const expected = BitBoard.fromPos(1);

  expect(received).toStrictEqual(expected);
});

test('getNegativeRayAttacks() | starting position - south - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'so', 0);
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('getNegativeRayAttacks() | starting position - west - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'we', 0);
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position with no pawn on a2 - north - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/.PPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
  const expected = BitBoard.fromPositions([8, 16, 24, 32, 40, 48]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position with no pawn on a2 and a7 - north - a1 rook', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/.ppppppp/8/8/8/8/.PPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
  const expected = BitBoard.fromPositions([8, 16, 24, 32, 40, 48, 56]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - north - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'no', 3);
  const expected = BitBoard.fromPositions([11]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - north-east - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'noEa', 3);
  const expected = BitBoard.fromPositions([12]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - east - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'ea', 3);
  const expected = BitBoard.fromPositions([4]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - north-west - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'noWe', 3);
  const expected = BitBoard.fromPositions([10]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - south - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'so', 3);
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - west - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'we', 3);
  const expected = BitBoard.fromPositions([2]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - south-west - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'soWe', 3);
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - south-east - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'soEa', 3);
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | starting position - north-east - d1 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'noEa', 27);
  const expected = BitBoard.fromPositions([36, 45, 54]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - east - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'ea', 27);
  const expected = BitBoard.fromPositions([28, 29, 30, 31]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - north-west - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getPositiveRayAttacks(startingBitBoard, 'noWe', 27);
  const expected = BitBoard.fromPositions([34, 41, 48]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - south - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'so', 27);
  const expected = BitBoard.fromPositions([19, 11]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - west - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'we', 27);
  const expected = BitBoard.fromPositions([24, 25, 26]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - south-west - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'soWe', 27);
  const expected = BitBoard.fromPositions([18, 9]);

  expect(received).toStrictEqual(expected);
});

test('getPositiveRayAttacks() | queen party - south-east - d4 queen', () => {
  const startingBitBoard: BitBoard = new Board(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  ).allPieces;
  const received = getNegativeRayAttacks(startingBitBoard, 'soEa', 27);
  const expected = BitBoard.fromPositions([20, 13]);

  expect(received).toStrictEqual(expected);
});
