import {
    ICell,
    IPiece,
} from '../types/board';

function getPieceChar(piece: IPiece): string {
    switch (piece.type) {
        case 'rook':
            return piece.color === 'white' ? 'R' : 'r';
        case 'knight':
            return piece.color === 'white' ? 'N' : 'n';
        case 'bishop':
            return piece.color === 'white' ? 'B' : 'b';
        case 'queen':
            return piece.color === 'white' ? 'Q' : 'q';
        case 'king':
            return piece.color === 'white' ? 'K' : 'k';
        case 'pawn':
            return piece.color === 'white' ? 'P' : 'p';
        default :
            return '$';
    }
}

function stringify(board: ICell[][]): string[] {
    const boardSnapshot: string[] = [];

    for (const [columnIndex, columnValue] of board.entries()) {
        let line = '';

        for (const cell of columnValue) {
            if (cell.piece) {
                line = line + getPieceChar(cell.piece);
            } else {
                line = line + '.';
            }
        }

        boardSnapshot.push(line);
    }

    return boardSnapshot;
}

function algebricNotationCoordsToNormal(algebricNotationArray: string[]): string[] {
    const normalCoordsArray: string[] = [];

    for (let charIndex = 0; charIndex < 8; charIndex ++) {
        let newCoordsLine = '';

        for (const line of algebricNotationArray) {
            newCoordsLine = newCoordsLine + line[charIndex];
        }

        normalCoordsArray.unshift(newCoordsLine);

    }

    return normalCoordsArray;
}

const boardSerializer = (board: ICell[][]): string[] => {
    return algebricNotationCoordsToNormal(stringify(board));
}

export default boardSerializer;
