import { slideDown, slideUp } from './moveHelpers';
import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import BitBoard from '../BitBoard/BitBoard';
import { positionsTable } from './../BitBoard/positionsHashTable';

export function pawnsMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  // @TODO implement pawnsMoves using
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

      return {
        from,
        quietMoves,
        killMoves: [],
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
