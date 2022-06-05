import { IColor } from '../types';

export function isPawn(piece: string): boolean {
  return ['p', 'P'].includes(piece);
}

export function isCapture(piece: string, destination: string): boolean {
  if (destination === '.') return false;
  const isMoveColorWhite = piece === piece.toUpperCase();
  const isDestinationColorWhite = destination === destination.toUpperCase();

  return isMoveColorWhite !== isDestinationColorWhite;
}

export function updateFenBoard(fenBoard: string): string {
  return fenBoard;
}

export function incrementFullMoveClock(fullMoveClock: number): number {
  return fullMoveClock + 1;
}

export function incrementHalfMoveClock(halfMoveClock: number): number {
  return halfMoveClock + 1;
}

export function toggleHasToPlay(hasToPlay: IColor): IColor {
  return hasToPlay === 'w' ? 'b' : 'w';
}

export function updateAvailableCastlings(
  availableCastlings: string,
  castlingLetter: string
): string {
  const isWhiteCastling = castlingLetter.toUpperCase() === castlingLetter;
  if (isWhiteCastling)
    availableCastlings = availableCastlings.replace('KQ', '');
  else availableCastlings = availableCastlings.replace('kq', '');
  if (availableCastlings.length === 0) availableCastlings = '-';

  return availableCastlings;
}
