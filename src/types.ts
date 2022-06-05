import BitBoard from './createNewGameScan/BitBoard/BitBoard';

export interface IRayAttack {
  // Positive rays
  no: BitBoard;
  ea: BitBoard;
  noEa: BitBoard;
  noWe: BitBoard;
  // Negative rays
  so: BitBoard;
  we: BitBoard;
  soWe: BitBoard;
  soEa: BitBoard;
}

export type IPieceCategory =
  | 'whiteRooks'
  | 'blackRooks'
  | 'whiteBishops'
  | 'blackBishops'
  | 'whiteQueens'
  | 'blackQueens';

export type ISlidingPiece = 'queen' | 'bishop' | 'rook';

export type IColor = 'w' | 'b';

export interface IPieceScope {
  position: number;
  attacks: BitBoard;
}

export interface IGameState {
  fenBoard: string;
  hasToPlay: IColor;
  availableCastlings: string;
  enPassantTarget: string;
  halfMoveClock: number;
  fullMoveClock: number;
}

export interface IScan {
  legalMoves: ILegalMoves;
  kingState: IKingState;
}

export type ILegalMoves = IMovesFromPosition[];

export interface IMovesFromPosition {
  from: IPosition;
  quietMoves: IPosition[];
  killMoves: IPosition[];
}

export type IPosition =
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'a5'
  | 'a6'
  | 'a7'
  | 'a8'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b4'
  | 'b5'
  | 'b6'
  | 'b7'
  | 'b8'
  | 'c1'
  | 'c2'
  | 'c3'
  | 'c4'
  | 'c5'
  | 'c6'
  | 'c7'
  | 'c8'
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'd5'
  | 'd6'
  | 'd7'
  | 'd8'
  | 'e1'
  | 'e2'
  | 'e3'
  | 'e4'
  | 'e5'
  | 'e6'
  | 'e7'
  | 'e8'
  | 'f1'
  | 'f2'
  | 'f3'
  | 'f4'
  | 'f5'
  | 'f6'
  | 'f7'
  | 'f8'
  | 'g1'
  | 'g2'
  | 'g3'
  | 'g4'
  | 'g5'
  | 'g6'
  | 'g7'
  | 'g8'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'h8';

export interface IKingState {
  isChecked: boolean;
  isCheckMated: boolean;
  isDraw: boolean;
}

export interface ICell {
  color: string;
  piece: IPiece | null;
  possibleDestination: boolean;
  possibleKill: boolean;
  anCoords: string;
}

export interface IPiece {
  color: string;
  type: string;
  columnIndex?: number;
  rowIndex?: number;
}

export interface IPath {
  from: ICellPosition;
  to: ICellPosition;
}

export interface IMove {
  startPosition: ICellPosition;
  endPosition: ICellPosition;
}

export interface ICellPosition {
  kill?: boolean;
  columnIndex: number;
  rowIndex: number;
}

export type IPieceLetter =
  | 'p'
  | 'r'
  | 'n'
  | 'b'
  | 'k'
  | 'q'
  | 'P'
  | 'R'
  | 'N'
  | 'B'
  | 'K'
  | 'Q';
export type IPieceName =
  | 'pawns'
  | 'rooks'
  | 'knights'
  | 'bishops'
  | 'kings'
  | 'queens';
export type ILetterToPieceMap = {
  p: 'pawns';
  r: 'rooks';
  n: 'knights';
  b: 'bishops';
  k: 'kings';
  q: 'queens';
  P: 'pawns';
  R: 'rooks';
  N: 'knights';
  B: 'bishops';
  K: 'kings';
  Q: 'queens';
};

export interface ICreateNewGameStateResult {
  fenBoard: string;
  castlingLetter?: string;
  enPassantTarget?: string;
  incrementHalfMoveClock?: boolean;
}

export interface ICastlingMap {
  [key: string]: {
    moveIndexes: [number, number];
    castlingLetter: string;
  };
}

export interface IParsedMove {
  move: [number, number];
  promotionPiece?: string;
  castling?: {
    rookMove: [number, number];
    letter: string;
  };
  enPassantTarget?: string;
}
