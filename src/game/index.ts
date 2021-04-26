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

    generateLegalMoves() {
        return {
            quietMoves: ['a2a3', 'a2a4'],
            captureMoves: ['a2b3'],
            playerIsChecked: false,
            isDraw: false,
        }
    }
}
