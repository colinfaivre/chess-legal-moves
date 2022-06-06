import { IMovesFromPosition } from '../../src/types';
export const legalMovesFromstartingPosition: IMovesFromPosition[] = [
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
  {
    from: 'a2',
    quietMoves: ['a3', 'a4'],
    killMoves: [],
  },
  {
    from: 'b2',
    quietMoves: ['b3', 'b4'],
    killMoves: [],
  },
  {
    from: 'c2',
    quietMoves: ['c3', 'c4'],
    killMoves: [],
  },
  {
    from: 'd2',
    quietMoves: ['d3', 'd4'],
    killMoves: [],
  },
  {
    from: 'e2',
    quietMoves: ['e3', 'e4'],
    killMoves: [],
  },
  {
    from: 'f2',
    quietMoves: ['f3', 'f4'],
    killMoves: [],
  },
  {
    from: 'g2',
    quietMoves: ['g3', 'g4'],
    killMoves: [],
  },
  {
    from: 'h2',
    quietMoves: ['h3', 'h4'],
    killMoves: [],
  },
  {
    from: 'a1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'h1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'c1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'f1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'd1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'e1',
    quietMoves: [],
    killMoves: [],
  },
];

export const legalMovesKnight: IMovesFromPosition[] = [
  {
    from: 'b1',
    quietMoves: ['a3', 'c3'],
    killMoves: [],
  },
  {
    from: 'g1',
    quietMoves: ['f3', 'h3'],
    killMoves: [],
  },
  {
    from: 'a2',
    quietMoves: ['a3', 'a4'],
    killMoves: [],
  },
  {
    from: 'b2',
    quietMoves: ['b3', 'b4'],
    killMoves: [],
  },
  {
    from: 'c2',
    quietMoves: ['c3', 'c4'],
    killMoves: [],
  },
  {
    from: 'd2',
    quietMoves: ['d3', 'd4'],
    killMoves: ['e3'],
  },
  {
    from: 'e2',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'f2',
    quietMoves: ['f3', 'f4'],
    killMoves: ['e3'],
  },
  {
    from: 'g2',
    quietMoves: ['g3', 'g4'],
    killMoves: [],
  },
  {
    from: 'h2',
    quietMoves: ['h3', 'h4'],
    killMoves: [],
  },
  {
    from: 'a1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'h1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'c1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'f1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'd1',
    quietMoves: [],
    killMoves: [],
  },
  {
    from: 'e1',
    quietMoves: [],
    killMoves: [],
  },
];
