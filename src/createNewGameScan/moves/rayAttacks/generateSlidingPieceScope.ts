import { IColor, ISlidingPiece, IPieceCategory } from '../../../types';
import {
  getNegativeRayAttacks,
  getPositiveRayAttacks,
} from '../rayAttacks/occupiedBoardRayAttacks';
import Board from '../../Board/Board';

export function generateSlidingPieceScope(
  board: Board,
  pieceName: ISlidingPiece,
  hasToPlay: IColor
) {
  // @TODO maybe not very performant...
  const piecePositions =
    board[getPieceCategory(pieceName, hasToPlay)].extractBits();

  const pieceScope = piecePositions.map(position => {
    const northAttacks = getPositiveRayAttacks(board.allPieces, 'no', position);
    const eastAttacks = getPositiveRayAttacks(board.allPieces, 'ea', position);
    const westAttacks = getNegativeRayAttacks(board.allPieces, 'we', position);
    const southAttacks = getNegativeRayAttacks(board.allPieces, 'so', position);
    const northEastAttacks = getPositiveRayAttacks(
      board.allPieces,
      'noEa',
      position
    );
    const northWestAttacks = getPositiveRayAttacks(
      board.allPieces,
      'noWe',
      position
    );
    const southEastAttacks = getNegativeRayAttacks(
      board.allPieces,
      'soEa',
      position
    );
    const southWestAttacks = getNegativeRayAttacks(
      board.allPieces,
      'soWe',
      position
    );

    const bishopAttacks = northEastAttacks
      .or(northWestAttacks)
      .or(southEastAttacks)
      .or(southWestAttacks);
    const rookAttacks = northAttacks
      .or(eastAttacks)
      .or(westAttacks)
      .or(southAttacks);
    const queenAttacks = bishopAttacks.or(rookAttacks);

    let attacks;
    if (pieceName === 'queen') attacks = queenAttacks;
    if (pieceName === 'bishop') attacks = bishopAttacks;
    if (pieceName === 'rook') attacks = rookAttacks;

    return {
      position,
      attacks,
    };
  });

  return pieceScope;
}

export function getPieceCategory(
  pieceName: ISlidingPiece,
  hasToPlay: IColor
): IPieceCategory {
  if (pieceName === 'rook' && hasToPlay === 'w') return 'whiteRooks';
  if (pieceName === 'rook' && hasToPlay === 'b') return 'blackRooks';
  if (pieceName === 'bishop' && hasToPlay === 'w') return 'whiteBishops';
  if (pieceName === 'bishop' && hasToPlay === 'b') return 'blackBishops';
  if (pieceName === 'queen' && hasToPlay === 'w') return 'whiteQueens';
  if (pieceName === 'queen' && hasToPlay === 'b') return 'blackQueens';
}
