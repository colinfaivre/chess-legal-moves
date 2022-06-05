import { IColor, ILegalMoves } from '../../types';
import Board from '../Board/Board';
import { generateSlidingPieceScope } from './rayAttacks/generateSlidingPieceScope';
import { generatePieceMoves } from './generatePieceMoves';

export function bishopsMoves(board: Board, hasToPlay: IColor): ILegalMoves {
  // @TODO document
  const bishopScope = generateSlidingPieceScope(board, 'bishop', hasToPlay);
  const bishopsMovesList = generatePieceMoves(bishopScope, board, hasToPlay);

  return bishopsMovesList;
}
