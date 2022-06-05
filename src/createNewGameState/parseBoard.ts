/**
 * Parses a string representing the chess board an array of 64 strings
 * @param boardString - a string representing the board as the first part of FEN notation
 * @returns an array of 64 strings representing the pieces and empty squares
 *
 * @internal
 */
export function parseBoard(boardString: string): string[] {
  const boardCells: string[] = [];
  const rankList = getRanks(boardString);

  for (let i = rankList.length - 1; i >= 0; i--) {
    boardCells.push(...getRankCells(rankList[i]));
  }

  return boardCells;
}

/**
 * Splits a board represented as a string into 8 strings representing the chessboard ranks
 * @param boardString - a string representing the board as the first part of FEN notation
 * @returns an array of 8 strings representing the chessboard ranks
 *
 * @internal
 */
export function getRanks(boardString: string): string[] {
  return boardString.split('/');
}

/**
 * Splits a chessboard rank represented as a string into an array of 8 characters reprenting the pieces and empty squares
 * @param rank - a string representing one of the chessboard ranks
 * @returns an array of 8 characters reprenting the pieces and empty squares
 *
 * @internal
 */
export function getRankCells(rank: string): string[] {
  rank = convertNumbersToPoints(rank);
  return rank.split('');
}

/**
 * Converts a chessboard rank represented as a string possibly containing numbers to represent the number of consecutive empty squares
 * into a rank containing points to represent each empty square
 * @param rank - a string representing one of the chessboard ranks
 * @returns a rank with dots to represent empty squares
 *
 * @internal
 */
export function convertNumbersToPoints(rank: string): string {
  for (let i = 1; i <= 8; i++) {
    rank = rank.replaceAll(i.toString(), '.'.repeat(i));
  }

  return rank;
}
