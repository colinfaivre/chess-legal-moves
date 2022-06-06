import Board from '../Board/Board';
import { rooksMoves } from './rooksMoves';

test('rooksMoves() | starting position', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/.PPPPPPP/RNBQKBNR');
  const received = rooksMoves(board, 'w');
  const expected = [
    {
      from: 'a1',
      killMoves: ['a7'],
      quietMoves: ['a2', 'a3', 'a4', 'a5', 'a6'],
    },
    {
      from: 'h1',
      killMoves: [],
      quietMoves: [],
    },
  ];

  expect(received).toStrictEqual(expected);
});

test('rooksMoves() | rook party', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/2R2R2/8/8/PPPPPPPP/.NBQKBN.');
  const received = rooksMoves(board, 'w');
  const expected = [
    {
      from: 'c5',
      killMoves: ['c7'],
      quietMoves: ['c3', 'c4', 'a5', 'b5', 'd5', 'e5', 'c6'],
    },
    {
      from: 'f5',
      killMoves: ['f7'],
      quietMoves: ['f3', 'f4', 'd5', 'e5', 'g5', 'h5', 'f6'],
    },
  ];

  expect(received).toStrictEqual(expected);
});
