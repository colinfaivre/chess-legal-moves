import { IPieceLetter, IPieceName, ILetterToPieceMap } from '../../types';
import BitBoard from '../BitBoard/BitBoard';

export default class Board {
  boardString: string;

  whites = new BitBoard();
  blacks = new BitBoard();
  pawns = new BitBoard();
  rooks = new BitBoard();
  knights = new BitBoard();
  bishops = new BitBoard();
  kings = new BitBoard();
  queens = new BitBoard();

  constructor(boardString: string) {
    this.feedBoard(boardString);
  }

  feedBoard(boardString: string) {
    this.boardString = boardString;
    const rows: string[] = boardString.split('/');

    let pos = 0;
    for (let i = rows.length - 1; i >= 0; i--) {
      rows[i].split('').forEach((char: IPieceLetter | '.') => {
        if (/[0-9]/.test(char)) {
          pos += parseInt(char);
        } else if (char === '.') {
          pos = pos + 1;
        } else {
          this[letterToType(char)].setBit(pos);
          this[letterToColor(char)].setBit(pos);
          pos = pos + 1;
        }
      });
    }
  }

  get allPieces() {
    return this.whites.or(this.blacks);
  }
  get empty() {
    return this.allPieces.not();
  }

  // WHITE PIECES
  get whitePawns() {
    return this.whites.and(this.pawns);
  }
  get whiteRooks() {
    return this.whites.and(this.rooks);
  }
  get whiteKnights() {
    return this.whites.and(this.knights);
  }
  get whiteBishops() {
    return this.whites.and(this.bishops);
  }
  get whiteQueens() {
    return this.whites.and(this.queens);
  }
  get whiteKing() {
    return this.whites.and(this.kings);
  }
  get quietDestinations() {
    return this.whites.not().and(this.blacks.not());
  }

  // BLACK PIECES
  get blackPawns() {
    return this.blacks.and(this.pawns);
  }
  get blackRooks() {
    return this.blacks.and(this.rooks);
  }
  get blackKnights() {
    return this.blacks.and(this.knights);
  }
  get blackBishops() {
    return this.blacks.and(this.bishops);
  }
  get blackQueens() {
    return this.blacks.and(this.queens);
  }
  get blackKing() {
    return this.blacks.and(this.kings);
  }
}

function letterToColor(letter: string) {
  return letter.toUpperCase() === letter ? 'whites' : 'blacks';
}

function letterToType(letter: IPieceLetter): IPieceName {
  const types: ILetterToPieceMap = {
    p: 'pawns',
    r: 'rooks',
    n: 'knights',
    b: 'bishops',
    k: 'kings',
    q: 'queens',
    P: 'pawns',
    R: 'rooks',
    N: 'knights',
    B: 'bishops',
    K: 'kings',
    Q: 'queens',
  };

  return types[letter];
}
