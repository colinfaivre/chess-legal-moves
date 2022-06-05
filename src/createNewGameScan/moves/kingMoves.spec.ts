import Board from '../Board/Board';
import { kingMoves } from './kingMoves';

test('kingMoves()', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/8/4K3');
  const received = kingMoves(board, 'w');
  const expected = [
    {
      from: 'e1',
      killMoves: [],
      quietMoves: ['d1', 'f1', 'd2', 'e2', 'f2'],
    },
  ];

  expect(received).toStrictEqual(expected);
});

test('kingMoves()', () => {
  const board = new Board('rnbqkbnr/pppppppp/8/8/8/8/7P/7K');
  const received = kingMoves(board, 'w');
  const expected = [
    {
      from: 'h1',
      killMoves: [],
      quietMoves: ['g1', 'g2'],
    },
  ];

  expect(received).toStrictEqual(expected);
});

test('kingMoves()', () => {
  const board = new Board('rnbqkbnK/ppppppp./8/8/8/8/8/8');
  const received = kingMoves(board, 'w');
  const expected = [
    {
      from: 'h8',
      killMoves: ['g7', 'g8'],
      quietMoves: ['h7'],
    },
  ];

  expect(received).toStrictEqual(expected);
});
