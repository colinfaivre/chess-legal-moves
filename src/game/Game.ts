import updateFenBoard from './updateFenBoard/updateFenBoard';
import validate from '../helpers/validate';
import { IGameState, IGameScan, ILegalMoves } from '../types';
import Board from '../board';
import { generateKnightsMoves } from './knight'
import { generatePawnsMoves } from './pawn'
import { generateRooksMoves } from './rook'
import { generateBishopsMoves } from './bishop'
import { generateQueensMoves } from './queen'
import { generateKingMoves } from './king'

export default class Game {
    fen: string;
    fenBoard: string;

    board: Board;
    hasToPlay: string;
    availableCastlings: string;
    enPassantTarget: string;
    halfMoveClock: number;
    fullMoveClock: number;

    legalMoves: [];

    constructor(fenString: string) {
        validate.fenString(fenString);
        this.feedGame(fenString);
        this.scan();
    }

    feedGame(fenString: string): void {
        this.fen = fenString;
        
        const [
            piecesPositions,
            hasToPlay,
            availableCastlings,
            enPassantTarget,
            halfMoveClock,
            fullMoveClock,
        ] = fenString.split(' ');

        this.fenBoard = piecesPositions;
        
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

    scan(): IGameScan {
        const legalMoves: ILegalMoves = []
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

    addMove(move: string): string {
        validate.move(move);

        const addMoveData = updateFenBoard(move, this.fenBoard);
        if (addMoveData.castlingLetter) this.updateAvailableCastlings(addMoveData.castlingLetter);
        if (addMoveData.enPassantTarget) this.updateEnPassantTarget(addMoveData.enPassantTarget);
        if (addMoveData.incrementHalfMoveClock) this.incrementHalfMoveClock();

        if (this.hasToPlay === "b") this.incrementFullMoveClock;
        this.toggleHasToPlay();

        return `${addMoveData.fenBoard} ${this.hasToPlay} ${this.availableCastlings} ${this.enPassantTarget} ${this.halfMoveClock} ${this.fullMoveClock}`
    }

    isLegalMove(move: string): boolean {
        return 
    }

    updateAvailableCastlings(castlingLetter: string): void {
        const isWhiteCastling = castlingLetter.toUpperCase() === castlingLetter;

        if (isWhiteCastling) this.availableCastlings = this.availableCastlings.replace('KQ', '');
        else this.availableCastlings = this.availableCastlings.replace('kq', '');

        if (this.availableCastlings.length === 0) this.availableCastlings = '-';
    }

    updateEnPassantTarget(enPassantTarget: string): void {
        this.enPassantTarget = enPassantTarget;
    }

    incrementHalfMoveClock(): void {
        this.halfMoveClock++;
    }

    incrementFullMoveClock(): void {
        this.fullMoveClock++;
    }

    toggleHasToPlay() {
        this.hasToPlay = this.hasToPlay === "w" ? "b" : "w";
    }
}
