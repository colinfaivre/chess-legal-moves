import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import BitBoard from '../BitBoard/BitBoard';
import { positionsTable } from './../BitBoard/positionsHashTable';

export function kingMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  const opponent = hasToPlay === 'w' ? 'blacks' : 'whites';
  const allKingMovesTable = generateAllKingMovesBBTable();

  const kingList = board[getKingAndColor(hasToPlay)]
    .extractBits()
    .map(kingPositionCode => {
      const from = positionsTable[kingPositionCode];
      const quietMoves = allKingMovesTable[kingPositionCode]
        .and(board.quietDestinations)
        .extractBits()
        .map(knightDestination => positionsTable[knightDestination]);
      const killMoves = allKingMovesTable[kingPositionCode]
        .and(board[opponent])
        .extractBits()
        .map(knightDestination => positionsTable[knightDestination]);

      return {
        from,
        quietMoves,
        killMoves,
      };
    });

  return kingList;
}

function generateAllKingMovesBBTable(): BitBoard[] {
  // King moves from a given position
  //
  //          noWe   no    noEa
  //            +7   +8   +9
  //              \  |  /
  //               \ | /
  //        we -1 -- 0 -- +1 ea
  //               / | \
  //              /  |  \
  //            -9  -8   -7
  //         soWe   so   soEa

  const AFile = [0, 8, 16, 24, 32, 40, 48, 56];
  const HFile = [7, 15, 23, 31, 39, 47, 55, 63];

  function no(position: number): number {
    return position + 8;
  }
  function so(position: number): number {
    return position - 8;
  }
  function noWe(position: number): number {
    return !HFile.includes(position + 7) ? position + 7 : null;
  }
  function we(position: number): number {
    return !HFile.includes(position - 1) ? position - 1 : null;
  }
  function soWe(position: number): number {
    return !HFile.includes(position - 9) ? position - 9 : null;
  }

  function noEa(position: number): number {
    return !AFile.includes(position + 9) ? position + 9 : null;
  }
  function ea(position: number): number {
    return !AFile.includes(position + 1) ? position + 1 : null;
  }
  function soEa(position: number): number {
    return !AFile.includes(position - 7) ? position - 7 : null;
  }

  const allKingMoves: BitBoard[] = [];

  for (let position = 0; position < 64; position++) {
    const movesFromThisPosition = [];
    // if position is not out of the board, add it to the list
    if (no(position)) movesFromThisPosition.push(no(position));
    if (noEa(position)) movesFromThisPosition.push(noEa(position));
    if (noWe(position)) movesFromThisPosition.push(noWe(position));
    if (so(position)) movesFromThisPosition.push(so(position));
    if (soEa(position)) movesFromThisPosition.push(soEa(position));
    if (soWe(position)) movesFromThisPosition.push(soWe(position));
    if (we(position)) movesFromThisPosition.push(we(position));
    if (ea(position)) movesFromThisPosition.push(ea(position));

    allKingMoves.push(BitBoard.fromPositions(movesFromThisPosition));
  }

  return allKingMoves;
}

export function getKingAndColor(hasToPlay: IColor): 'whiteKing' | 'blackKing' {
  if (hasToPlay === 'w') return 'whiteKing';
  if (hasToPlay === 'b') return 'blackKing';
}
