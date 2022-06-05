import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import { generateSlidingPieceScope } from './rayAttacks/generateSlidingPieceScope';
import { generatePieceMoves } from './generatePieceMoves';

export function queensMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  const queenScope = generateSlidingPieceScope(board, 'queen', hasToPlay);
  const queensMovesList = generatePieceMoves(queenScope, board, hasToPlay);

  return queensMovesList;
}
