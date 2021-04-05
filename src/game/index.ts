import createBoard from './createBoard';
import getPossibleDestinations from './getPossibleDestinations';

import {
    ICell,
    IPiece,
} from '../types/board';

export default class Game {
    board: ICell[][];
    hasToPlay: string;
    availableCastlings: string;
    enPassantTarget: string;
    halfMoveClock: number;
    fullMoveClock: number;

    constructor(fenString: string) {
        // @TODO Check if fenString is valid with regex

        const fenArray = fenString.split(' ');
        this.board = createBoard(fenArray[0]);
        this.hasToPlay = fenArray[1];
        this.availableCastlings = fenArray[2];
        this.enPassantTarget = fenArray[3];
        this.halfMoveClock = parseInt(fenArray[4]);
        this.fullMoveClock = parseInt(fenArray[5]);
    }

    get playerColor() {
        return this.hasToPlay === 'w' ? 'white' : 'black';
    }

    get allPieces() {
        let pieces = [];

        for (const column in this.board) {
            for (const row in this.board[column]) {
                if (this.board[column][row].piece !== null) {
                    const piece = {
                        ...this.board[column][row].piece!,
                        rowIndex: parseInt(row),
                        columnIndex: parseInt(column),
                    }

                    pieces.push(piece);
                }
            }
        }

        return pieces;
    }

    get playerPieces(): IPiece[] {
        return this.allPieces.filter(piece => piece.color === this.playerColor);
    }

    get opponentPieces(): IPiece[] {
        return this.allPieces.filter(piece => piece.color !== this.playerColor);
    }

    get playerValidMoves() {
        let validMoves = []

        for (let piece of this.playerPieces) {
            validMoves.push(this.computeValidMoves(piece));
        }

        return validMoves;
    }

    computeValidMoves(piece: IPiece) {
        return getPossibleDestinations(this.board, {
            columnIndex: piece.columnIndex,
            rowIndex: piece.rowIndex,
        })
    }
}
