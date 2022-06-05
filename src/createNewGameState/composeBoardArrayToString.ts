export function composeBoardArrayToString(board: string[]): string {
  const eightRankString = board.slice(56).join('');
  const sevenRankString = board.slice(48, 56).join('');
  const sixRankString = board.slice(40, 48).join('');
  const fiveRankString = board.slice(32, 40).join('');
  const fourRankString = board.slice(24, 32).join('');
  const threeRankString = board.slice(16, 24).join('');
  const twoRankString = board.slice(8, 16).join('');
  const oneRankString = board.slice(0, 8).join('');

  const boardStrings = [
    eightRankString,
    sevenRankString,
    sixRankString,
    fiveRankString,
    fourRankString,
    threeRankString,
    twoRankString,
    oneRankString,
  ];

  return convertPointsToNumbers(boardStrings.join('/'));
}

export function convertPointsToNumbers(boardString: string): string {
  boardString = boardString.replaceAll(/\.{8}/g, '8');
  boardString = boardString.replaceAll(/\.{7}/g, '7');
  boardString = boardString.replaceAll(/\.{6}/g, '6');
  boardString = boardString.replaceAll(/\.{5}/g, '5');
  boardString = boardString.replaceAll(/\.{4}/g, '4');
  boardString = boardString.replaceAll(/\.{3}/g, '3');
  boardString = boardString.replaceAll(/\.{2}/g, '2');

  return boardString;
}
