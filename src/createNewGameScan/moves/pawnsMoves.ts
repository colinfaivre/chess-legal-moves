import { ILegalMoves } from '../../types';
import BitBoard from '../BitBoard/BitBoard';

export function pawnsMoves(pawnsBB: BitBoard): ILegalMoves {
  // @TODO implement pawnsMoves using
  // https://www.chessprogramming.org/Pawn_Pushes_(Bitboards)
  // https://www.chessprogramming.org/Pawn_Attacks_(Bitboards)

  return [
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
  ];
}
