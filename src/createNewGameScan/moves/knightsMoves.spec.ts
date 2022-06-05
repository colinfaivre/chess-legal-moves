import Board from '../Board/Board';
import { knightsMoves } from './knightsMoves';

test('knightsMoves() | starting position', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
  const received = knightsMoves(board, 'w');
  const expected = [
    {
      from: 'b1',
      killMoves: [],
      quietMoves: ['a3', 'c3'],
    },
    {
      from: 'g1',
      killMoves: [],
      quietMoves: ['f3', 'h3'],
    },
  ];

  expect(received).toStrictEqual(expected);
});

test('knightsMoves() | knight attack position', () => {
  const board1 = new Board('rnbqkbnr/pppppppp/.N4N./8/8/8/PPPPPPPP/R.BQKB.R');
  const received = knightsMoves(board1, 'w');
  const expected = [
    {
      from: 'b6',
      killMoves: ['d7', 'a8', 'c8'],
      quietMoves: ['a4', 'c4', 'd5'],
    },
    {
      from: 'g6',
      killMoves: ['e7', 'f8', 'h8'],
      quietMoves: ['f4', 'h4', 'e5'],
    },
  ];

  expect(received).toStrictEqual(expected);
});
