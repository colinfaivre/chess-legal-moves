import regex from './regex';

export default {
  fenStringSyntax(fenString: string): void {
    const isValidFen = fenString.match(regex.fenString);
    if (!isValidFen)
      throw new Error('The provided fen string syntax is not valid');
  },
  moveSyntax(move: string): void {
    const isValidMove = move.match(regex.move);
    if (!isValidMove) throw new Error('The provided move syntax is not valid');
  },
};
