import regex from '../helpers/regex';
import { IParsedMove, ICastlingMap } from '../types';

// Document parseMove function
export function parseMove(moveString: string): IParsedMove {
  // @TODO extract functions to improve readability
  // @TODO test everything
  const from = moveString.substring(0, 2);
  const to = moveString.substring(2, 4);
  const parsedMove: IParsedMove = {
    move: [mapPositionToBoardIndex(from), mapPositionToBoardIndex(to)],
  };

  const isPromotionMove = moveString.match(regex.promotionMove);
  if (isPromotionMove) parsedMove.promotionPiece = moveString.substring(4);

  const isCastlingMove = moveString.match(regex.castlingMove);
  const castlingMap: ICastlingMap = {
    e1g1: { moveIndexes: [7, 5], castlingLetter: 'K' },
    e1c1: { moveIndexes: [0, 3], castlingLetter: 'Q' },
    e8g8: { moveIndexes: [63, 61], castlingLetter: 'k' },
    e8c8: { moveIndexes: [56, 59], castlingLetter: 'q' },
  };
  if (isCastlingMove)
    parsedMove.castling = {
      rookMove: castlingMap[moveString].moveIndexes,
      letter: castlingMap[moveString].castlingLetter,
    };

  const isPawnDoubleMove = moveString.match(regex.pawnDoubleMove);
  if (isPawnDoubleMove) {
    const from = moveString.substring(0, 2);

    parsedMove.enPassantTarget = from;
    parsedMove.enPassantTarget = parsedMove.enPassantTarget.replace('2', '3');
    parsedMove.enPassantTarget = parsedMove.enPassantTarget.replace('7', '6');
  }

  return parsedMove;
}

export function mapPositionToBoardIndex(position: string): number {
  const filesLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const indexMap: { [key: string]: number } = {};
  let counter = 0;

  for (let rank = 1; rank <= 8; rank++) {
    for (let fileIndex = 0; fileIndex < filesLetter.length; fileIndex++) {
      indexMap[filesLetter[fileIndex] + rank.toString()] = counter;
      counter++;
    }
  }

  return indexMap[position];
}
