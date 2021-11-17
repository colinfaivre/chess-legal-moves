import { ILegalMoves } from '../types';
import Board from '../board';

export default class Game {
    board: Board
    hasToPlay: string;
    availableCastlings: string;
    enPassantTarget: string;
    halfMoveClock: number;
    fullMoveClock: number;

    constructor(fenString: string) {
        // @TODO Check if fenString is valid with regex
        const [
            piecesPositions,
            hasToPlay,
            availableCastlings,
            enPassantTarget,
            halfMoveClock,
            fullMoveClock,
        ] = fenString.split(' ');

        this.board = new Board(piecesPositions);
        this.hasToPlay = hasToPlay;
        this.availableCastlings = availableCastlings;
        this.enPassantTarget = enPassantTarget;
        this.halfMoveClock = parseInt(halfMoveClock);
        this.fullMoveClock = parseInt(fullMoveClock);
    }

    get playerColor() {
        return this.hasToPlay === 'w' ? 'white' : 'black';
    }

    get playerPieces() {
        return this.playerColor === 'white' ? this.board.whites.print() : this.board.blacks.print();
    }

    get opponentPieces() {
        return this.playerColor === 'white' ? this.board.blacks.print() : this.board.whites.print();
    }

    get allPieces() {
        return this.board.allPieces.print();
    }

    get pawns() {
        return this.board.pawns.print();
    }

    get rooks() {
        return this.board.rooks.print();
    }

    generateLegalMoves(): ILegalMoves {
        return {
            legalMoves: [
                {
                    from: 'a2',
                    quietMoves: ['a3', 'a4'],
                    killMoves: ['b3'],
                },
                {
                    from: 'b2',
                    quietMoves: ['b3', 'b4'],
                    killMoves: ['a3'],
                }
            ],
            gameState: {
                isChecked: false,
                isCheckMated: false,
                isDraw: false,
            }
        }
    }
}
