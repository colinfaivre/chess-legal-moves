import { IGameState, ILegalMoves, IMovesFromPosition } from '../types';
import Board from '../board';
import { generateKnightsMoves } from './knight'
import { generatePawnsMoves } from './pawn'
import { generateRooksMoves } from './rook'
import { generateBishopsMoves } from './bishop'
import { generateQueensMoves } from './queen'
import { generateKingMoves } from './king'

export default class Game {
    board: Board
    hasToPlay: string;
    availableCastlings: string;
    enPassantTarget: string;
    halfMoveClock: number;
    fullMoveClock: number;

    constructor(fenString: string) {
        const fenStringRegex = /^\s*([prnbqkPRNBQK12345678]{1,8}(?:\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(w|b)\s+([KQkqA-Ha-h]{1,4}|\-)\s+(?:(?:([a-h][36]|\-)\s+(\d{1,3})\s+(\d{1,4}))|(?:0\s+0))\s*$/;
        const isValidFen = fenString.match(fenStringRegex)
        if (!isValidFen) throw new Error('The provided fen string is not valid')

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
        return this.hasToPlay === 'w' ?
            'white' :
            'black';
    }

    get playerPieces() {
        return this.playerColor === 'white' ?
            this.board.whites.print() :
            this.board.blacks.print();
    }

    get opponentPieces() {
        return this.playerColor === 'white'?
            this.board.blacks.print() :
            this.board.whites.print();
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
        const legalMoves: IMovesFromPosition[] = []
        const gameState: IGameState = {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        }

        if (this.board.whiteKnights) legalMoves.push(...generateKnightsMoves(this.board));
        if (this.board.whitePawns) legalMoves.push(...generatePawnsMoves(this.board.whitePawns));
        if (this.board.whiteRooks) legalMoves.push(...generateRooksMoves(this.board.whiteRooks));
        if (this.board.whiteBishops) legalMoves.push(...generateBishopsMoves(this.board.whiteBishops));
        if (this.board.whiteQueens) legalMoves.push(...generateQueensMoves(this.board.whiteQueens));
        if (this.board.whiteKing) legalMoves.push(...generateKingMoves(this.board.whiteKing));

        return {
            legalMoves,
            gameState,
        }
    }
}
