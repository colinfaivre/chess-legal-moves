import createNewGameState from './game/createNewGameState/createNewGameState';
import Board from './board';
import { generate } from './game/moveGeneration';
import validate from './helpers/validate';
import { IGameState, IKingState, IGameScan, ILegalMoves } from './types';

export default class Game {
    private state: IGameState = {
        fenBoard: "",
        hasToPlay: "",
        availableCastlings: "",
        enPassantTarget: "",
        halfMoveClock: 0,
        fullMoveClock: 0,
    }
    private board: Board;

    public fen: string;
    public legalMoves: ILegalMoves = [];
    public kingState: IKingState = {
        isChecked: false,
        isCheckMated: false,
        isDraw: false,
    };

    constructor(fenString: string) {
        validate.fenStringSyntax(fenString);
        this.feedState(fenString);
        this.scan();
    }

    private feedState(fenString: string): void {
        this.fen = fenString;
        
        const [
            fenBoard,
            hasToPlay,
            availableCastlings,
            enPassantTarget,
            halfMoveClock,
            fullMoveClock,
        ] = fenString.split(' ');

        this.state.fenBoard = fenBoard;
        this.state.hasToPlay = hasToPlay;
        this.state.availableCastlings = availableCastlings;
        this.state.enPassantTarget = enPassantTarget;
        this.state.halfMoveClock = parseInt(halfMoveClock);
        this.state.fullMoveClock = parseInt(fullMoveClock);
    }
    
    private scan(): IGameScan {
        this.board = new Board(this.state.fenBoard);

        if (this.board.whiteKnights) this.legalMoves.push(...generate.knightsMoves(this.board));
        if (this.board.whitePawns) this.legalMoves.push(...generate.pawnsMoves(this.board.whitePawns));
        if (this.board.whiteRooks) this.legalMoves.push(...generate.rooksMoves(this.board.whiteRooks));
        if (this.board.whiteBishops) this.legalMoves.push(...generate.bishopsMoves(this.board.whiteBishops));
        if (this.board.whiteQueens) this.legalMoves.push(...generate.queenMoves(this.board.whiteQueens));
        if (this.board.whiteKing) this.legalMoves.push(...generate.kingMoves(this.board.whiteKing));

        return {
            legalMoves: this.legalMoves,
            kingState: this.kingState,
        }
    }

    public addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.moveSyntax(move);
        this.checkIfLegalMove(move);
        this.state = createNewGameState(move, this.state);

        return this.updateFenFromState();
    }

    private checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
    }

    private updateFenFromState(): string {
        return this.fen = `${this.state.fenBoard} ${this.state.hasToPlay} ${this.state.availableCastlings} ${this.state.enPassantTarget} ${this.state.halfMoveClock} ${this.state.fullMoveClock}`
    }
}
