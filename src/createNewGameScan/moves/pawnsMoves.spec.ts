import BitBoard from '../BitBoard/BitBoard';
import Board from '../Board/Board';
import { pawnsMoves } from './pawnsMoves';

test('pawnsMove() | starting position - white to play', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  const received = pawnsMoves(board, 'w');
  const expected = [
    { from: 'a2', killMoves: [], quietMoves: ['a3', 'a4'] },
    { from: 'b2', killMoves: [], quietMoves: ['b3', 'b4'] },
    { from: 'c2', killMoves: [], quietMoves: ['c3', 'c4'] },
    { from: 'd2', killMoves: [], quietMoves: ['d3', 'd4'] },
    { from: 'e2', killMoves: [], quietMoves: ['e3', 'e4'] },
    { from: 'f2', killMoves: [], quietMoves: ['f3', 'f4'] },
    { from: 'g2', killMoves: [], quietMoves: ['g3', 'g4'] },
    { from: 'h2', killMoves: [], quietMoves: ['h3', 'h4'] },
  ];

  expect(received).toStrictEqual(expected);
});

test('pawnsMove() | great wall of China position - white to play', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/1P1P1P1P/P1P1P1P1/RNBQKBNR');
  const received = pawnsMoves(board, 'w');
  const expected = [
    { from: 'a2', killMoves: [], quietMoves: ['a3', 'a4'] },
    { from: 'c2', killMoves: [], quietMoves: ['c3', 'c4'] },
    { from: 'e2', killMoves: [], quietMoves: ['e3', 'e4'] },
    { from: 'g2', killMoves: [], quietMoves: ['g3', 'g4'] },
    { from: 'b3', killMoves: [], quietMoves: ['b4'] },
    { from: 'd3', killMoves: [], quietMoves: ['d4'] },
    { from: 'f3', killMoves: [], quietMoves: ['f4'] },
    { from: 'h3', killMoves: [], quietMoves: ['h4'] },
  ];

  expect(received).toStrictEqual(expected);
});

test('pawnsMove() | starting position - black to play', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  const received = pawnsMoves(board, 'b');
  const expected = [
    { from: 'a7', killMoves: [], quietMoves: ['a5', 'a6'] },
    { from: 'b7', killMoves: [], quietMoves: ['b5', 'b6'] },
    { from: 'c7', killMoves: [], quietMoves: ['c5', 'c6'] },
    { from: 'd7', killMoves: [], quietMoves: ['d5', 'd6'] },
    { from: 'e7', killMoves: [], quietMoves: ['e5', 'e6'] },
    { from: 'f7', killMoves: [], quietMoves: ['f5', 'f6'] },
    { from: 'g7', killMoves: [], quietMoves: ['g5', 'g6'] },
    { from: 'h7', killMoves: [], quietMoves: ['h5', 'h6'] },
  ];

  expect(received).toStrictEqual(expected);
});

test('pawnsMove() | black pawns in front of white pawns - white to play', () => {
  const board = new Board('rnbqkbnr/8/8/8/8/pppppppp/PPPPPPPP/RNBQKBNR');
  const received = pawnsMoves(board, 'w');
  const expected = [
    { from: 'a2', killMoves: ['b3'], quietMoves: [] },
    { from: 'b2', killMoves: ['a3', 'c3'], quietMoves: [] },
    { from: 'c2', killMoves: ['b3', 'd3'], quietMoves: [] },
    { from: 'd2', killMoves: ['c3', 'e3'], quietMoves: [] },
    { from: 'e2', killMoves: ['d3', 'f3'], quietMoves: [] },
    { from: 'f2', killMoves: ['e3', 'g3'], quietMoves: [] },
    { from: 'g2', killMoves: ['f3', 'h3'], quietMoves: [] },
    { from: 'h2', killMoves: ['g3'], quietMoves: [] },
  ];

  expect(received).toStrictEqual(expected);
});

test('pawnsMove() | white queen will die... - black to play', () => {
  const board = new Board('rnbqkbnr/pppppppp/3Q4/8/8/8/PPPPPPPP/RNB.KBNR');
  const received = pawnsMoves(board, 'b');
  const expected = [
    { from: 'a7', killMoves: [], quietMoves: ['a5', 'a6'] },
    { from: 'b7', killMoves: [], quietMoves: ['b5', 'b6'] },
    { from: 'c7', killMoves: ['d6'], quietMoves: ['c5', 'c6'] },
    { from: 'd7', killMoves: [], quietMoves: [] },
    { from: 'e7', killMoves: ['d6'], quietMoves: ['e5', 'e6'] },
    { from: 'f7', killMoves: [], quietMoves: ['f5', 'f6'] },
    { from: 'g7', killMoves: [], quietMoves: ['g5', 'g6'] },
    { from: 'h7', killMoves: [], quietMoves: ['h5', 'h6'] },
  ];

  expect(received).toStrictEqual(expected);
});
