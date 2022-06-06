import { slideDown, slideUp } from './moveHelpers';
import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import BitBoard from '../BitBoard/BitBoard';
import { positionsTable } from './../BitBoard/positionsHashTable';

export function pawnsMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  // https://www.chessprogramming.org/Pawn_Pushes_(Bitboards)
  // https://www.chessprogramming.org/Pawn_Attacks_(Bitboards)
  const opponent = hasToPlay === 'w' ? 'blacks' : 'whites';

  const pawnsList = board[getPawnAndColor(hasToPlay)]
    .extractBits()
    .map(pawnPositionCode => {
      const from = positionsTable[pawnPositionCode];
      const quietMoves = generateAllPawnsPushBBTable(board, hasToPlay)
        [pawnPositionCode].and(board.quietDestinations)
        .extractBits()
        .map(pawnDestination => positionsTable[pawnDestination]);
      const killMoves = generateAllPawnsAttacksBBTable(hasToPlay)
        [pawnPositionCode].and(board[opponent])
        .extractBits()
        .map(pawnDestination => positionsTable[pawnDestination]);

      return {
        from,
        quietMoves,
        killMoves,
      };
    });

  return pawnsList;
}

export function generateAllPawnsPushBBTable(
  board: Board,
  hasToPlay: IColor
): BitBoard[] {
  const result: BitBoard[] = [];

  if (hasToPlay === 'w') {
    for (let position = 0; position < 64; position++) {
      result.push(
        whiteSinglePushDestinations(position, board.empty).or(
          whiteDoublePushDestinations(position, board.empty)
        )
      );
    }
  }

  if (hasToPlay === 'b') {
    for (let position = 0; position < 64; position++) {
      result.push(
        blackSinglePushDestinations(position, board.empty).or(
          blackDoublePushDestinations(position, board.empty)
        )
      );
    }
  }

  return result;
}

export function whiteSinglePushDestinations(
  position: number,
  emptyBoard: BitBoard
): BitBoard {
  let whitePawn = BitBoard.fromPos(position);
  whitePawn = slideUp(whitePawn);

  return whitePawn.and(emptyBoard);
}

export function whiteDoublePushDestinations(
  position: number,
  emptyBoard: BitBoard
): BitBoard {
  const rank4 = BitBoard.fromHex('00000000FF000000');
  let singlePush = whiteSinglePushDestinations(position, emptyBoard);
  singlePush = slideUp(singlePush);

  return singlePush.and(emptyBoard).and(rank4);
}

export function blackSinglePushDestinations(
  position: number,
  emptyBoard: BitBoard
): BitBoard {
  let blackPawn = BitBoard.fromPos(position);
  blackPawn = slideDown(blackPawn);

  return blackPawn.and(emptyBoard);
}

export function blackDoublePushDestinations(
  position: number,
  emptyBoard: BitBoard
): BitBoard {
  const rank5 = BitBoard.fromHex('000000FF00000000');
  let singlePush = blackSinglePushDestinations(position, emptyBoard);
  singlePush = slideDown(singlePush);

  return singlePush.and(emptyBoard).and(rank5);
}

export function getPawnAndColor(
  hasToPlay: IColor
): 'whitePawns' | 'blackPawns' {
  if (hasToPlay === 'w') return 'whitePawns';
  if (hasToPlay === 'b') return 'blackPawns';
}

export function generateAllPawnsAttacksBBTable(hasToPlay: IColor): BitBoard[] {
  const result: BitBoard[] = [];

  if (hasToPlay === 'w') {
    for (let position = 0; position < 64; position++) {
      const positionsAttacked: number[] = [];
      if (getWhitePawnEastAttack(position))
        positionsAttacked.push(getWhitePawnEastAttack(position));
      if (getWhitePawnWestAttack(position))
        positionsAttacked.push(getWhitePawnWestAttack(position));
      result.push(BitBoard.fromPositions(positionsAttacked));
    }
  }

  if (hasToPlay === 'b') {
    for (let position = 0; position < 64; position++) {
      const positionsAttacked: number[] = [];
      if (getBlackPawnEastAttack(position))
        positionsAttacked.push(getBlackPawnEastAttack(position));
      if (getBlackPawnWestAttack(position))
        positionsAttacked.push(getBlackPawnWestAttack(position));
      result.push(BitBoard.fromPositions(positionsAttacked));
    }
  }

  return result;
}

export function getWhitePawnWestAttack(position: number): number {
  const HFile = [7, 15, 23, 31, 39, 47, 55, 63];

  return !HFile.includes(position + 7) ? position + 7 : null;
}

export function getWhitePawnEastAttack(position: number): number {
  const AFile = [0, 8, 16, 24, 32, 40, 48, 56];

  return !AFile.includes(position + 9) ? position + 9 : null;
}

export function getBlackPawnWestAttack(position: number): number {
  const HFile = [7, 15, 23, 31, 39, 47, 55, 63];

  return !HFile.includes(position - 9) ? position - 9 : null;
}

export function getBlackPawnEastAttack(position: number): number {
  const AFile = [0, 8, 16, 24, 32, 40, 48, 56];

  return !AFile.includes(position - 7) ? position - 7 : null;
}
