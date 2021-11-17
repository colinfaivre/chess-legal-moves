import boardSnapshotParser from './boardSnapshotParser';
import { ICell } from '../types';

export default function createBoard(boardString: string): ICell[][] {
    return boardSnapshotParser(createBoardSnapshot(boardString));
}

function createBoardSnapshot(boardString: string): string[] {
    let boardStringsArray = boardString.split('/');
    boardStringsArray = boardStringsArray.map(row => {
        return row.length === 8 ? row : replaceNumbersWithPoints(row);
    })

    return boardStringsArray;
}

function replaceNumbersWithPoints(row: string): string {
    let resultRow = '';
    let charactersArray = row.split('');
    for (let character of charactersArray) {
        if (isNumber(character)) {
            const numberOfPoints = parseInt(character);

            for (let i = 0; i < numberOfPoints; i++) {
                resultRow += '.';
            }
        } else {
            resultRow += character;
        }
    }

    return resultRow;
}

function isNumber(char: string) {
    return /^\d+$/.test(char);
}
