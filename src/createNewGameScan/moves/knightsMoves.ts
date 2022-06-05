import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import BitBoard from '../BitBoard/BitBoard';
import { positionsTable } from './../BitBoard/positionsHashTable';

export function knightsMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  const opponent = hasToPlay === 'w' ? 'blacks' : 'whites';
  const allKnightMovesTable = generateAllKnightMovesBBTable();

  const knightsList = board[getKnightAndColor(hasToPlay)]
    .extractBits()
    .map(knightPositionCode => {
      const from = positionsTable[knightPositionCode];
      const quietMoves = allKnightMovesTable[knightPositionCode]
        .and(board.quietDestinations)
        .extractBits()
        .map(knightDestination => positionsTable[knightDestination]);
      const killMoves = allKnightMovesTable[knightPositionCode]
        .and(board[opponent])
        .extractBits()
        .map(knightDestination => positionsTable[knightDestination]);

      return {
        from,
        quietMoves,
        killMoves,
      };
    });

  return knightsList;
}

function generateAllKnightMovesBBTable(): BitBoard[] {
  // Knight moves from a given position
  //
  //         noNoWe    noNoEa
  //             +15  +17
  //              |     |
  // noWeWe  +6 __|     |__+10  noEaEa
  //               \   /
  //                >0<
  //            __ /   \ __
  // soWeWe -10   |     |   -6  soEaEa
  //              |     |
  //             -17  -15
  //         soSoWe    soSoEa

  // A list of 64 bitboards representing the knight possible moves from any board position
  const AFile = [0, 8, 16, 24, 32, 40, 48, 56];
  const BFile = [1, 9, 17, 25, 33, 41, 49, 57];
  const ABFile = [...AFile, ...BFile];
  const HFile = [7, 15, 23, 31, 39, 47, 55, 63];
  const GFile = [6, 14, 22, 30, 38, 46, 54, 62];
  const GHFile = [...GFile, ...HFile];

  function noNoEa(position: number): number {
    // if knight is on H file northNorthEast move would land on A file because of +17 -> return null in that particular case
    return !AFile.includes(position + 17) ? position + 17 : null;
  }
  function noEaEa(position: number): number {
    // if knight is on G or H file northEastEast move would land on A or B file because of +10 -> return null in that particular case
    return !ABFile.includes(position + 10) ? position + 10 : null;
  }
  function soEaEa(position: number): number {
    // if knight is on G or H file southEastEast move would land on A file because of -6 -> return null in that particular case
    return !ABFile.includes(position - 6) ? position - 6 : null;
  }
  function soSoEa(position: number): number {
    return !AFile.includes(position - 15) ? position - 15 : null;
  }
  function noNoWe(position: number): number {
    return !HFile.includes(position + 15) ? position + 15 : null;
  }
  function noWeWe(position: number): number {
    return !GHFile.includes(position + 6) ? position + 6 : null;
  }
  function soWeWe(position: number): number {
    return !GHFile.includes(position - 10) ? position - 10 : null;
  }
  function soSoWe(position: number): number {
    return !HFile.includes(position - 17) ? position - 17 : null;
  }

  const allKnightMoves: BitBoard[] = [];

  for (let position = 0; position < 64; position++) {
    const movesFromThisPosition = [];
    // if destination is not out of the board, add it to the list
    if (noNoEa(position)) movesFromThisPosition.push(noNoEa(position));
    if (noEaEa(position)) movesFromThisPosition.push(noEaEa(position));
    if (soEaEa(position)) movesFromThisPosition.push(soEaEa(position));
    if (soSoEa(position)) movesFromThisPosition.push(soSoEa(position));
    if (noNoWe(position)) movesFromThisPosition.push(noNoWe(position));
    if (noWeWe(position)) movesFromThisPosition.push(noWeWe(position));
    if (soWeWe(position)) movesFromThisPosition.push(soWeWe(position));
    if (soSoWe(position)) movesFromThisPosition.push(soSoWe(position));

    allKnightMoves.push(BitBoard.fromPositions(movesFromThisPosition));
  }

  return allKnightMoves;
}

export function getKnightAndColor(
  hasToPlay: IColor
): 'whiteKnights' | 'blackKnights' {
  if (hasToPlay === 'w') return 'whiteKnights';
  if (hasToPlay === 'b') return 'blackKnights';
}
