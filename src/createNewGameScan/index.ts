import Board from './Board/Board';
import { IGameState, IScan } from '../types';
import { knightsMoves } from './moves/knightsMoves';
import { pawnsMoves } from './moves/pawnsMoves';
import { rooksMoves } from './moves/rooksMoves';
import { bishopsMoves } from './moves/bishopsMoves';
import { queensMoves } from './moves/queensMoves';
import { kingMoves } from './moves/kingMoves';

export const generate = {
  knightsMoves,
  pawnsMoves,
  rooksMoves,
  bishopsMoves,
  queensMoves,
  kingMoves,
};

export function createNewGameScan(gameState: IGameState): IScan {
  const scan: IScan = {
    legalMoves: [],
    kingState: {
      isChecked: false,
      isCheckMated: false,
      isDraw: false,
    },
  };
  const board = new Board(gameState.fenBoard);

  if (board.whiteKnights)
    scan.legalMoves.push(...generate.knightsMoves(board, gameState.hasToPlay));
  if (board.whitePawns)
    scan.legalMoves.push(...generate.pawnsMoves(board, gameState.hasToPlay));
  if (board.whiteRooks)
    scan.legalMoves.push(...generate.rooksMoves(board, gameState.hasToPlay));
  if (board.whiteBishops)
    scan.legalMoves.push(...generate.bishopsMoves(board, gameState.hasToPlay));
  if (board.whiteQueens)
    scan.legalMoves.push(...generate.queensMoves(board, gameState.hasToPlay));
  if (board.whiteKing)
    scan.legalMoves.push(...generate.kingMoves(board, gameState.hasToPlay));

  return scan;
}
