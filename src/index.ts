import updateGameState from './game/updateGameState/updateGameState';
import validate from './helpers/validate';
import { IGameState, IKingState, IGameScan, ILegalMoves } from './types';
import Board from './board';
import { generateKnightsMoves } from './game/knight'
import { generatePawnsMoves } from './game/pawn'
import { generateRooksMoves } from './game/rook'
import { generateBishopsMoves } from './game/bishop'
import { generateQueensMoves } from './game/queen'
import { generateKingMoves } from './game/king'

export default class Game {
    // game state
    private state: IGameState = {
        fenBoard: "",
        hasToPlay: "",
        availableCastlings: "",
        enPassantTarget: "",
        halfMoveClock: 0,
        fullMoveClock: 0,
    }
    // legalMoves and kingState generation
    private board: Board;

    // output
    public fen: string;
    public legalMoves: ILegalMoves = [];
    public kingState: IKingState = {
        isChecked: false,
        isCheckMated: false,
        isDraw: false,
    };

    constructor(fenString: string) {
        validate.fenString(fenString);
        this.feedGame(fenString);
        this.scan();
    }

    private feedGame(fenString: string): void {
        this.fen = fenString;
        
        const [
            fenBoard,
            hasToPlay,
            availableCastlings,
            enPassantTarget,
            halfMoveClock,
            fullMoveClock,
        ] = fenString.split(' ');

        this.board = new Board(fenBoard);
        
        this.state.fenBoard = fenBoard;
        this.state.hasToPlay = hasToPlay;
        this.state.availableCastlings = availableCastlings;
        this.state.enPassantTarget = enPassantTarget;
        this.state.halfMoveClock = parseInt(halfMoveClock);
        this.state.fullMoveClock = parseInt(fullMoveClock);
    }

    private scan(): IGameScan {
        if (this.board.whiteKnights) this.legalMoves.push(...generateKnightsMoves(this.board));
        if (this.board.whitePawns) this.legalMoves.push(...generatePawnsMoves(this.board.whitePawns));
        if (this.board.whiteRooks) this.legalMoves.push(...generateRooksMoves(this.board.whiteRooks));
        if (this.board.whiteBishops) this.legalMoves.push(...generateBishopsMoves(this.board.whiteBishops));
        if (this.board.whiteQueens) this.legalMoves.push(...generateQueensMoves(this.board.whiteQueens));
        if (this.board.whiteKing) this.legalMoves.push(...generateKingMoves(this.board.whiteKing));

        return {
            legalMoves: this.legalMoves,
            kingState: this.kingState,
        }
    }

    public addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.move(move);
        this.checkIfLegalMove(move);

        const addMoveData = updateGameState(move, this.state.fenBoard);
        if (addMoveData.castlingLetter) this.updateAvailableCastlings(addMoveData.castlingLetter);
        if (addMoveData.enPassantTarget) this.updateEnPassantTarget(addMoveData.enPassantTarget);
        if (addMoveData.incrementHalfMoveClock) this.incrementHalfMoveClock();
        if (this.state.hasToPlay === "b") this.incrementFullMoveClock();
        this.toggleHasToPlay();

        return `${addMoveData.fenBoard} ${this.state.hasToPlay} ${this.state.availableCastlings} ${this.state.enPassantTarget} ${this.state.halfMoveClock} ${this.state.fullMoveClock}`
    }

    private checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
    }

    private updateAvailableCastlings(castlingLetter: string): void {
        const isWhiteCastling = castlingLetter.toUpperCase() === castlingLetter;

        if (isWhiteCastling) this.state.availableCastlings = this.state.availableCastlings.replace('KQ', '');
        else this.state.availableCastlings = this.state.availableCastlings.replace('kq', '');

        if (this.state.availableCastlings.length === 0) this.state.availableCastlings = '-';
    }

    private updateEnPassantTarget(enPassantTarget: string): void {
        this.state.enPassantTarget = enPassantTarget;
    }

    private incrementHalfMoveClock(): void {
        this.state.halfMoveClock++;
    }

    private incrementFullMoveClock(): void {
        this.state.fullMoveClock++;
    }

    private toggleHasToPlay(): void {
        this.state.hasToPlay = this.state.hasToPlay === "w" ? "b" : "w";
    }
}
