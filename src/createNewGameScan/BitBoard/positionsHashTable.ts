import { IPosition } from '../../types';

export function createPositionTable(): IPosition[] {
  const positionsTable: IPosition[] = [];
  for (let i = 0; i < 64; i++) {
    positionsTable.push(generatePosition(i));
  }

  return positionsTable;
}

export function generatePosition(i: number): IPosition {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const columnLetter = letters[i % 8];
  const rankNumber = Math.floor(i / 8) + 1;

  return `${columnLetter}${rankNumber}` as IPosition;
}

export const positionsTable = createPositionTable();
