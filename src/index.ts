import updateFenBoard from './game/updateFenBoard/updateFenBoard';
import validate from './helpers/validate';
import { IGameState, IGameScan, ILegalMoves } from './types';
import Board from './board';
import { generateKnightsMoves } from './game/knight'
import { generatePawnsMoves } from './game/pawn'
import { generateRooksMoves } from './game/rook'
import { generateBishopsMoves } from './game/bishop'
import { generateQueensMoves } from './game/queen'
import { generateKingMoves } from './game/king'

export default class Game {
    // input
    fen: string;
    fenBoard: string;

    board: Board;
    hasToPlay: string;
    availableCastlings: string;
    enPassantTarget: string;
    halfMoveClock: number;
    fullMoveClock: number;

    // output
    legalMoves: ILegalMoves = [];
    gameState: IGameState = {
        isChecked: false,
        isCheckMated: false,
        isDraw: false,
    };

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

    scan(): IGameScan {
        if (this.board.whiteKnights) this.legalMoves.push(...generateKnightsMoves(this.board));
        if (this.board.whitePawns) this.legalMoves.push(...generatePawnsMoves(this.board.whitePawns));
        if (this.board.whiteRooks) this.legalMoves.push(...generateRooksMoves(this.board.whiteRooks));
        if (this.board.whiteBishops) this.legalMoves.push(...generateBishopsMoves(this.board.whiteBishops));
        if (this.board.whiteQueens) this.legalMoves.push(...generateQueensMoves(this.board.whiteQueens));
        if (this.board.whiteKing) this.legalMoves.push(...generateKingMoves(this.board.whiteKing));

        return {
            legalMoves: this.legalMoves,
            gameState: this.gameState,
        }
    }

    addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.move(move);
        this.checkIfLegalMove(move);

        const addMoveData = updateFenBoard(move, this.fenBoard);
        if (addMoveData.castlingLetter) this.updateAvailableCastlings(addMoveData.castlingLetter);
        if (addMoveData.enPassantTarget) this.updateEnPassantTarget(addMoveData.enPassantTarget);
        if (addMoveData.incrementHalfMoveClock) this.incrementHalfMoveClock();

        if (this.hasToPlay === "b") this.incrementFullMoveClock();
        this.toggleHasToPlay();

        return `${addMoveData.fenBoard} ${this.hasToPlay} ${this.availableCastlings} ${this.enPassantTarget} ${this.halfMoveClock} ${this.fullMoveClock}`
    }

    checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
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

    toggleHasToPlay(): void {
        this.hasToPlay = this.hasToPlay === "w" ? "b" : "w";
    }
}
