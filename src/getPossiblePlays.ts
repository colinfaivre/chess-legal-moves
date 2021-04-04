import createBoard from './createBoard';
import getPossibleDestinations from './getPossibleDestinations';

import {
    ICell,
    IMove,
    IPiece,
} from './types/board';

interface IPossiblePlays {
    possibleMoves: string[];
    possibleKills: string[];
    playerIsChecked: boolean;
}

class Game {
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


export default function getPossiblePlays(gameFenString: string): IPossiblePlays {
    const game = new Game(gameFenString);
    console.log(game.board);
    console.log('allPieces : ', game.allPieces);
    console.log('playerPieces : ', game.playerPieces);
    console.log('opponentPieces : ', game.opponentPieces);
    console.log('computeValidMoves for first white knight', game.computeValidMoves(game.playerPieces[3]));
    console.log('playerValidMoves', game.playerValidMoves);

    return {
        possibleMoves: ['a2a3', 'a2a4'],
        possibleKills: ['a2b3'],
        playerIsChecked: false,
    }
}
