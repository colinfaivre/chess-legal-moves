import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import { generateSlidingPieceScope } from './rayAttacks/generateSlidingPieceScope';
import { generatePieceMoves } from './generatePieceMoves';

export function rooksMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  const rookScope = generateSlidingPieceScope(board, 'rook', hasToPlay);
  const rooksMovesList = generatePieceMoves(rookScope, board, hasToPlay);

  return rooksMovesList;
}
