import { IGameState, ILegalMoves, IMovesFromPosition } from '../types';
import Board from '../board';
import {
    generateKnightsMoves,
    generatePawnsMoves,
    generateRooksMoves,
    generateBishopsMoves,
    generateQueensMoves,
    generateKingMoves,
} from './moves';

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
        let legalMoves: IMovesFromPosition[] = []
        const gameState: IGameState = {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        }
        
        if (this.board.whiteKnights) legalMoves.push(...generateKnightsMoves());
        if (this.board.whitePawns) legalMoves.push(...generatePawnsMoves());
        if (this.board.whiteRooks) legalMoves.push(...generateRooksMoves());
        if (this.board.whiteBishops) legalMoves.push(...generateBishopsMoves());
        if (this.board.whiteQueens) legalMoves.push(...generateQueensMoves());
        if (this.board.whiteKing) legalMoves.push(...generateKingMoves());

        return {
            legalMoves,
            gameState,
        }
    }
}
